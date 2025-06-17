import React, { useEffect, useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Check, ChevronLeft, ChevronRight, X, Calendar as CalendarIcon, Clock, User, FileText, Tag, Plus } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ClientSidbar from '../navbar/ClientSidbar';
import ClientHeader from '../navbar/ClientHeader';
import ClientFooter from '../navbar/ClientFooter';
import { AddEventCategory, GetEventCategory } from '../../../API/Api';
import toast from 'react-hot-toast';

const ItemTypes = { CATEGORY: 'category' };

// Mock components for sidebar and header




function ClientSchedule() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState('Today');
  const [viewType, setViewType] = useState('Week');
  const [calendarView, setCalendarView] = useState('month');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalMode, setModalMode] = useState('create'); // 'create' or 'edit'

  const getCurrentWeekDates = () => {
    const currentDay = selectedDate.getDay();
    const week = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date(selectedDate);
      date.setDate(selectedDate.getDate() - currentDay + i);
      week.push(date);
    }

    return week;
  };

 const [categories, setCategories] = useState(
  // { name: 'Interview Schedule', color: 'bg-orange-500', checked: true },
  // { name: 'Internal Meeting', color: 'bg-green-500', checked: true },
  // { name: 'Team Schedule', color: 'bg-blue-300', checked: false },
  // { name: 'My Task', color: 'bg-yellow-400', checked: false },
  // { name: 'Reminders', color: 'bg-purple-400', checked: false },
  { CategoryName: '', color: '' }
);
const [showCategoryForm, setShowCategoryForm] = useState(false);
// const [newCategory, setNewCategory] = useState({ CategoryName: '', color: '' });
const [Allcategory,setAllcategory]=useState([])

useEffect(() => {
  const FetchEventCategory = async () => {
    try {
      const response = await GetEventCategory();
      const withCheck = response.data.map((cat) => ({
        ...cat,
        checked: cat.checked !== undefined ? cat.checked : true, // default to true if undefined
      }));
      setAllcategory(withCheck);
    } catch (error) {
      console.error('Error in GetEventCategory API:', error);
      toast.error('Failed to load categories');
    }
  };
  FetchEventCategory();
}, []);


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
const handleAddCategory=(e)=>{
  setCategories({ ...categories, [e.target.name]: e.target.value });
}

const handleCategoryToggle = (index) => {
    setAllcategory(prevCategories => {
      const updatedCategories = [...prevCategories];
      updatedCategories[index] = {
        ...updatedCategories[index],
        checked: !updatedCategories[index].checked
      };
      return updatedCategories;
    });
  };

const handleCategorySubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await AddEventCategory(categories);
      console.log("Response:", res);
      toast.success("Add Category Successfully!!!");
      
      // Add new category to local state with checked: true
      const newCategory = {
        ...categories,
        checked: true,
        id: res.data?.id || Date.now() // Use API response ID or fallback
      };
      setAllcategory(prev => [...prev, newCategory]);
      
      setCategories({
        CategoryName: '', 
        color: '' 
      });
      setShowCategoryForm(false);
    } catch (error) {
      console.log("Error submitting form:", error);
      toast.error("Failed to add category");
    }
  }

  
  const navigateMonth = (direction) => {
    const newDate = new Date(selectedDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    newDate.setDate(1);
    setSelectedDate(newDate);
  };

  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const startOfWeek = new Date(selectedDate);
    startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay() + i);
    return new Date(startOfWeek);
  });

  const [events, setEvents] = useState({
    month: {},
    week: {},
    day: {}
  });

  const timeSlots = [
    '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM',
    '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM',
    '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM',
    '7 PM', '8 PM', '9 PM', '10 PM', '11 PM', '12 AM'
  ];

  // Event handlers
  const handleEventClick = (event, eventIndex, context) => {
    setSelectedEvent({ ...event, index: eventIndex, context });
    setModalMode('edit');
    setIsModalOpen(true);
  };

  const handleCreateEvent = () => {
    setSelectedEvent(null);
    setModalMode('create');
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleEventSave = (eventData) => {
    // Handle event save logic here
    console.log('Saving event:', eventData);
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleEventDelete = () => {
    if (selectedEvent && selectedEvent.context) {
      const { context } = selectedEvent;
      setEvents(prev => {
        const updated = { ...prev };
        if (context.type === 'month') {
          updated.month[context.day] = updated.month[context.day].filter((_, idx) => idx !== selectedEvent.index);
        } else if (context.type === 'week') {
          updated.week[context.dateKey][context.timeSlot] = updated.week[context.dateKey][context.timeSlot].filter((_, idx) => idx !== selectedEvent.index);
        } else if (context.type === 'day') {
          updated.day[context.dateKey][context.timeSlot] = updated.day[context.dateKey][context.timeSlot].filter((_, idx) => idx !== selectedEvent.index);
        }
        return updated;
      });
    }
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

const handleMonthDrop = (date, item) => {
  const day = date.getDate();
  const dateKey = date.toDateString();
  const defaultTimeSlot = '9 AM';

  const newEvent = {
    title: item.name,
    color: item.color,
    description: '',
    startTime: defaultTimeSlot,
    endTime: defaultTimeSlot,
    attendees: '',
    location: ''
  };

  setEvents(prev => {
    const updated = { ...prev };

    if (!updated.month[day]) updated.month[day] = [];
    updated.month[day].push(newEvent);

    if (!updated.week[dateKey]) updated.week[dateKey] = {};
    if (!updated.week[dateKey][defaultTimeSlot]) updated.week[dateKey][defaultTimeSlot] = [];
    updated.week[dateKey][defaultTimeSlot].push(newEvent);

    if (!updated.day[dateKey]) updated.day[dateKey] = {};
    if (!updated.day[dateKey][defaultTimeSlot]) updated.day[dateKey][defaultTimeSlot] = [];
    updated.day[dateKey][defaultTimeSlot].push(newEvent);

    return updated;
  });
};





const handleWeekDrop = (date, timeSlot, item) => {
  const dateKey = date.toDateString();
  const day = date.getDate();
  const slotLabel = formatTimeSlot(timeSlot);

  const newEvent = {
    title: item.name,
    color: item.color,
    description: '',
    startTime: slotLabel,
    endTime: slotLabel,
    attendees: '',
    location: ''
  };

  setEvents(prev => {
    const updated = { ...prev };

    // Week
    if (!updated.week[dateKey]) updated.week[dateKey] = {};
    if (!updated.week[dateKey][slotLabel]) updated.week[dateKey][slotLabel] = [];
    updated.week[dateKey][slotLabel].push(newEvent);

    // Day
    if (!updated.day[dateKey]) updated.day[dateKey] = {};
    if (!updated.day[dateKey][slotLabel]) updated.day[dateKey][slotLabel] = [];
    updated.day[dateKey][slotLabel].push(newEvent);

    // Month
    if (!updated.month[day]) updated.month[day] = [];
    updated.month[day].push(newEvent);

    return updated;
  });
};


function formatTimeSlot(timeSlot) {
  const match = timeSlot.match(/^(\d{1,2})\s*(am|pm)$/i);
  if (!match) return timeSlot;

  let hour = parseInt(match[1]);
  let suffix = match[2].toUpperCase();

  if (hour === 12) hour = 12;
  else if (suffix === 'PM') hour += 12;

  // Return 12-hour format label: "9 AM"
  const formattedHour = (hour % 12) === 0 ? 12 : (hour % 12);
  const formattedSuffix = hour >= 12 ? 'PM' : 'AM';

  return `${formattedHour} ${formattedSuffix}`;
}


 const handleDayDrop = (timeSlot, item) => {
  const date = new Date(selectedDate);
  const dateKey = date.toDateString();
  const day = date.getDate();
  const slotLabel = formatTimeSlot(timeSlot); // formatted time like '9 AM'

  const newEvent = {
    title: item.name,
    color: item.color,
    description: '',
    startTime: slotLabel,
    endTime: slotLabel,
    attendees: '',
    location: ''
  };

  setEvents((prev) => {
    const updated = { ...prev };

    // Day view
    if (!updated.day[dateKey]) updated.day[dateKey] = {};
    if (!updated.day[dateKey][slotLabel]) updated.day[dateKey][slotLabel] = [];
    updated.day[dateKey][slotLabel].push(newEvent);

    // Week view
    if (!updated.week[dateKey]) updated.week[dateKey] = {};
    if (!updated.week[dateKey][slotLabel]) updated.week[dateKey][slotLabel] = [];
    updated.week[dateKey][slotLabel].push(newEvent);

    // Month view
    if (!updated.month[day]) updated.month[day] = [];
    updated.month[day].push(newEvent);

    return updated;
  });
};





 return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen flex flex-col lg:flex-row bg-[#fff0e5]">
        {/* Sidebar */}
        <div className="lg:w-[300px] lg:block lg:sticky lg:top-0">
          <ClientSidbar />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <div className="sticky top-0 z-10">
            <ClientHeader />
          </div>

          {/* Body */}
          <div className="flex-1 bg-[#fff0e5] p-4 md:p-6 overflow-auto">
            <div className="text-orange-500 mb-6">
              <h1 className="text-2xl md:text-3xl font-bold">My Schedule</h1>
            </div>

            <div className="bg-white rounded-3xl px-4 py-5 sm:px-8">
              {/* Top Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex gap-2 flex-wrap">
                  {['My Schedule', 'Today'].map((label) => (
                    <button
                      key={label}
                      onClick={() => setView(label)}
                      className={`px-4 py-2 rounded-md text-sm font-bold transition-colors border ${
                        view === label
                          ? 'text-orange-400 border-orange-400'
                          : 'text-orange-400 border-transparent'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                {/* Month Navigation */}
                <div className="flex items-center gap-2">
                  <button onClick={() => navigateMonth('prev')} className="p-2 text-orange-500 hover:bg-orange-50 rounded">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h2 className="text-sm md:text-md font-semibold text-gray-800 uppercase tracking-wide">
                    {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </h2>
                  <button onClick={() => navigateMonth('next')} className="p-2 text-orange-500 hover:bg-orange-50 rounded">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* View Type Switch */}
                <div className="flex gap-2">
                  {['Day', 'Week', 'Month'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setViewType(type)}
                      className={`px-3 py-1 text-sm rounded-md ${
                        viewType === type ? 'bg-orange-500 text-white' : 'bg-gray-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Layout Grid */}
              <div className="flex flex-col lg:flex-row border border-orange-400 overflow-hidden">
                {/* Sidebar Panel */}
                <div className="lg:w-[300px] border-r border-orange-200 p-4 space-y-6">
                  <button
                    onClick={handleCreateEvent}
                    className="w-full text-orange-600 border border-orange-500 py-2 rounded font-medium hover:bg-orange-100 transition"
                  >
                    + Create Event
                  </button>

                  {/* Inline Calendar */}
                  <div className="-mx-4 border-b border-orange-400">
                    <div className="px-4 pb-4">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="text-lg font-semibold text-gray-700">
                          {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                        </h2>
                        <div className="flex space-x-1 text-orange-500">
                          <ChevronLeft
                            className="w-7 h-7 cursor-pointer hover:bg-orange-50 rounded p-1"
                            onClick={() => navigateMonth('prev')}
                          />
                          <ChevronRight
                            className="w-7 h-7 cursor-pointer hover:bg-orange-50 rounded p-1"
                            onClick={() => navigateMonth('next')}
                          />
                        </div>
                      </div>

                      <div className="react-calendar-container">
                        <Calendar
                          className="custom-calendar"
                          value={selectedDate}
                          onChange={setSelectedDate}
                          view={calendarView}
                          onViewChange={({ activeStartDate, view }) => {
                            console.log('Switched to view:', view);
                          }}
                          tileDisabled={({ date, view }) => {
                            if (view === 'month') {
                              return (
                                date.getMonth() !== selectedDate.getMonth() ||
                                date.getFullYear() !== selectedDate.getFullYear()
                              );
                            }
                            return false;
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-md font-semibold text-gray-800">Categories</h3>
                      <button
                        onClick={() => setShowCategoryForm(true)}
                        className="text-orange-500 text-md font-bold hover:text-orange-600"
                      >
                        + Add Category
                      </button>
                    </div>

                    {showCategoryForm && (
                      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md space-y-4">
                          <h2 className="text-lg font-bold text-gray-800">Add New Category</h2>
                          <form onSubmit={handleCategorySubmit}>
                            <input
                              type="text"
                              placeholder="Category Name"
                              value={categories.CategoryName}
                              name='CategoryName'
                              onChange={handleAddCategory}
                              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
                              required
                            />
                            <div className="flex items-center justify-between gap-4 mb-4">
                              <label className="text-gray-700 font-medium">Pick Color:</label>
                              <input
                                type="color"
                                value={categories.color}
                                name='color'
                                onChange={handleAddCategory}
                                className="w-12 h-10 border border-gray-300 rounded cursor-pointer"
                              />
                              <div
                                className="flex-1 h-10 rounded text-white flex items-center justify-center text-sm font-semibold"
                                style={{ backgroundColor: categories.color }}
                              >
                                {categories.CategoryName || 'Preview'}
                              </div>
                            </div>

                            <div className="flex justify-end space-x-3 pt-4 border-t">
                              <button 
                                type="button"
                                onClick={() => setShowCategoryForm(false)} 
                                className="text-gray-600 px-4 py-1 rounded hover:bg-gray-100"
                              >
                                Cancel
                              </button>
                              <button 
                                type='submit'
                                className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600"
                              >
                                Add
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      {Allcategory.map((cat, idx) => (
                        <CategoryItem
                          key={idx}
                          name={cat.CategoryName}
                          color={cat.color}
                          checked={cat.checked}
                         onToggle={() => {
    const updated = [...Allcategory];
    updated[idx] = { ...updated[idx], checked: !updated[idx].checked };
    setAllcategory(updated);
  }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Calendar Content */}
                <div className="flex-1 overflow-x-auto p-4">
                  {/* WEEK View */}
                  {viewType === 'Week' && (
                    <div className="w-full min-w-[800px]">
                      {/* Week Header */}
                      <div className="grid grid-cols-8 border-b border-orange-400 text-sm font-medium">
                        <div className="p-2 text-left text-gray-500">GMT +07</div>
                        {weekDates.map((date, idx) => (
                          <div key={idx} className="p-2 text-center">
                            <div className="text-gray-500 uppercase">
                              {date.toLocaleDateString('en-US', { weekday: 'short' })}
                            </div>
                            <div
                              className={`w-7 h-7 mx-auto mt-1 flex items-center justify-center rounded-full ${
                                date.toDateString() === selectedDate.toDateString()
                                  ? 'bg-orange-500 text-white font-semibold'
                                  : 'text-gray-800'
                              }`}
                            >
                              {date.getDate()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Week Grid */}
                      <div className="bg-white">
                        {timeSlots.slice(0, 11).map((time, i) => (
                          <div key={i} className="grid grid-cols-8 min-h-[50px] text-sm">
                            <div className="p-2 text-right text-gray-500 border-r border-orange-400">{time}</div>
                            {weekDates.map((date, dayIdx) => {
                              const dateKey = date.toDateString();
                              const timeSlotEvents = events.week[dateKey]?.[time] || [];

                              return (
                                <WeekTimeSlot
                                  key={`${dateKey}-${time}`}
                                  date={date}
                                  timeSlot={time}
                                  events={timeSlotEvents}
                                  onDrop={handleWeekDrop}
                                  onEventClick={(event, index) =>
                                    handleEventClick(event, index, {
                                      type: 'week',
                                      dateKey,
                                      timeSlot: time,
                                    })
                                  }
                                />
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* DAY View */}
                  {viewType === 'Day' && (
  <div className="bg-white rounded-lg border border-orange-400">
    <div className="border-b border-orange-400 p-4 flex justify-between items-center">
      <div className="text-md text-gray-500 uppercase tracking-wide">GMT +07</div>
      <div className="text-lg font-semibold text-gray-900">
        {selectedDate.toLocaleDateString('en-US', { weekday: 'long' })}
      </div>
    </div>
    <div>
      {timeSlots.slice(0, 11).map((time, i) => {
        const dateKey = selectedDate.toDateString();
        const timeSlotEvents = events.day[dateKey]?.[time] || [];

        return (
          <div key={i} className="flex border-b border-orange-200">
            <div className="w-16 text-right p-3 border-r border-orange-200 text-sm text-gray-500">
              {time}
            </div>
            <div className="flex-1 relative">
              <DayTimeSlot
                timeSlot={time}
                events={timeSlotEvents}
                onDrop={handleDayDrop}
                onEventClick={(event, index) =>
                  handleEventClick(event, index, {
                    type: 'day',
                    dateKey,
                    timeSlot: time,
                  })
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  </div>
)}


                  {/* MONTH View */}
                  {viewType === 'Month' && (
                    <div className="">
                      <div className="bg-white border border-orange-400 rounded-lg overflow-hidden min-w-full">
                        {/* Header with day names */}
                        <div className="grid grid-cols-7 text-xs sm:text-sm md:text-base text-gray-600 border-b border-orange-100 font-medium sticky top-0 z-10 bg-white">
                          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                            <div key={day} className="p-1 sm:p-2 text-center border-r border-orange-100 last:border-r-0">
                              <span className="block sm:hidden">{day.charAt(0)}</span>
                              <span className="hidden sm:block">{day}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Calendar grid */}
                        <div className="grid grid-cols-7">
                          {(() => {
                            const start = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
                            const end = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
                            const days = [];

                            // Empty cells at the beginning of the month
                            for (let i = 0; i < start.getDay(); i++) {
                              days.push(
                                <div 
                                  key={`empty-start-${i}`} 
                                  className="min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px] p-1 sm:p-2 md:p-3 border border-orange-100 bg-orange-50"
                                />
                              );
                            }

                            // Days of the month
                            for (let d = 1; d <= end.getDate(); d++) {
                              const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), d);
                              const key = date.toDateString();
                              days.push(
                                <DayCell
                                  key={key}
                                  date={date}
                                  events={events.month[d] || []}
                                  onDrop={handleMonthDrop}
                                  onEventClick={(event, index) =>
                                    handleEventClick(event, index, { type: 'month', day: d })
                                  }
                                />
                              );
                            }

                            // Empty cells at the end of the month
                            const remaining = (start.getDay() + end.getDate()) % 7;
                            if (remaining !== 0) {
                              for (let i = 0; i < 7 - remaining; i++) {
                                days.push(
                                  <div
                                    key={`empty-end-${i}`}
                                    className="min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px] p-1 sm:p-2 md:p-3 border border-orange-100 bg-orange-50"
                                  />
                                );
                              }
                            }

                            return days;
                          })()}
                        </div>
                      </div>
                    </div> 
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <ClientFooter />
        </div>

        {/* Event Modal */}
        {isModalOpen && (
          <EventModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onSave={handleEventSave}
            onDelete={modalMode === 'edit' ? handleEventDelete : null}
            event={selectedEvent}
            mode={modalMode}
          />
        )}
      </div>
    </DndProvider>
  );
}

// Event Modal Component
function EventModal({ isOpen, onClose, onSave, onDelete, event, mode }) {
  const [formData, setFormData] = useState({
    title: event?.title || '',
    date: event?.date || new Date().toISOString().split('T')[0],
    startTime: event?.startTime || '09:00',
    endTime: event?.endTime || '10:00',
    location: event?.location || '',
    attendees: event?.attendees || '',
    color: event?.color || 'bg-orange-500'
  });

  const categories = [
    { name: 'Orange', color: 'bg-orange-500' },
    { name: 'Green', color: 'bg-green-500' },
    { name: 'Blue', color: 'bg-blue-300' },
    { name: 'Yellow', color: 'bg-yellow-400' },
    { name: 'Purple', color: 'bg-purple-400' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/30 backdrop-blur-sm flex items-center justify-center z-50 p-4 sm:p-6">
  <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
    
    {/* Header */}
    <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
        {mode === 'create' ? 'Create New Event' : 'Edit Event'}
      </h2>
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
      >
        <X className="w-5 h-5 text-gray-500" />
      </button>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-6 text-sm sm:text-base">
      
      {/* Event Title */}
      <div>
        <label className="flex items-center space-x-2 font-medium text-gray-700 mb-2">
          <FileText className="w-4 h-4" />
          <span>Event Title</span>
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => handleChange('title', e.target.value)}
          className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="Enter event title"
          required
        />
      </div>

     

      {/* Date and Time Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Date */}
        <div>
          <label className="flex items-center space-x-2 font-medium text-gray-700 mb-2">
            <CalendarIcon className="w-4 h-4" />
            <span>Date</span>
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => handleChange('date', e.target.value)}
            className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>

        {/* Start Time */}
        <div>
          <label className="flex items-center space-x-2 font-medium text-gray-700 mb-2">
            <Clock className="w-4 h-4" />
            <span>Start Time</span>
          </label>
          <input
            type="time"
            value={formData.startTime}
            onChange={(e) => handleChange('startTime', e.target.value)}
            className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>

        {/* End Time */}
        <div>
          <label className="flex items-center space-x-2 font-medium text-gray-700 mb-2">
            <Clock className="w-4 h-4" />
            <span>End Time</span>
          </label>
          <input
            type="time"
            value={formData.endTime}
            onChange={(e) => handleChange('endTime', e.target.value)}
            className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="flex items-center space-x-2 font-medium text-gray-700 mb-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Location</span>
        </label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) => handleChange('location', e.target.value)}
          className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="Event location (optional)"
        />
      </div>

      {/* Attendees */}
      <div>
        <label className="flex items-center space-x-2 font-medium text-gray-700 mb-2">
          <User className="w-4 h-4" />
          <span>Guest</span>
        </label>
        <input
          type="text"
          value={formData.attendees}
          onChange={(e) => handleChange('attendees', e.target.value)}
          className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          placeholder="Add Guest"
        />
      </div>

      {/* Category */}
      <div>
        <label className="flex items-center space-x-2 font-medium text-gray-700 mb-2">
          <Tag className="w-4 h-4" />
          <span>Color</span>
        </label>
        <select
          value={formData.color}
          onChange={(e) => {
            const selectedCategory = categories.find(cat => cat.name === e.target.value);
            handleChange('category', e.target.value);
            handleChange('color', selectedCategory?.color || 'bg-orange-500');
          }}
          className="w-full px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        >
          {categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      {/* Color Preview */}
      <div>
        <label className="font-medium text-gray-700 mb-2 block">Color Preview</label>
        <div className={`w-full h-12 rounded-lg ${formData.color} flex items-center justify-center text-white font-medium`}>
          {formData.title || 'Event Preview'}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col-reverse sm:flex-row justify-between pt-6 border-t border-gray-200 space-y-3 sm:space-y-0 sm:space-x-3">
        {mode === 'edit' && onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium mt-3"
          >
            Delete Event
          </button>
        )}
        <div className="flex justify-end space-x-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium w-full sm:w-auto"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-3 py-1 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium w-full sm:w-auto"
          >
            {mode === 'create' ? 'Create Event' : 'Save Changes'}
          </button>
        </div>
      </div>
    </form>
  </div>
</div>

  );
}

// Draggable Category Item Component
function CategoryItem({ name, color, checked, onToggle }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CATEGORY,
    item: { name, color },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  }));

  return (
    <div
      ref={drag}
      className={`flex items-center flex-wrap sm:flex-nowrap gap-2 cursor-pointer transition-opacity ${isDragging ? 'opacity-50' : 'opacity-100'}`}
      onClick={onToggle}
    >
      <div
  className={`w-5 h-5 flex items-center justify-center rounded border border-orange-400`}
  style={{ backgroundColor: checked ? color : 'transparent' }}
>
  {checked && <Check className="w-4 h-4 text-white" />}
</div>

      <span className="text-sm text-gray-600">{name}</span>
    </div>
  );
}


// Drop Target Day Cell Component for Month View
function DayCell({ date, events, onDrop, onEventClick }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CATEGORY,
    drop: (item) => onDrop(date, item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  // ADD STATE FOR SHOWING MORE EVENTS ON MOBILE
  const [showAllEvents, setShowAllEvents] = useState(false);
  const maxVisibleEvents = 2; // Maximum events to show on mobile
  const visibleEvents = showAllEvents ? events : events.slice(0, maxVisibleEvents);
  const hasMoreEvents = events.length > maxVisibleEvents;

  return (
    <div
      ref={drop}
      className={`p-1 sm:p-2 border border-orange-100 min-h-[60px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[120px] relative transition-colors flex flex-col /* CHANGE HEIGHTS AND ADD FLEX */
        ${isOver ? 'bg-orange-100' : 'bg-white'} 
        w-full`} /* REMOVE min-w-[80px] as it can cause horizontal scroll */
    >
      {/* DATE NUMBER */}
      <div className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-semibold mb-1 flex-shrink-0"> {/* ADD RESPONSIVE TEXT SIZE */}
        {date.getDate()}
      </div>
      
      {/* EVENTS CONTAINER */}
      <div className="flex-1 space-y-1 overflow-hidden"> {/* ADD FLEX-1 AND OVERFLOW-HIDDEN */}
        {visibleEvents.map((ev, idx) => (
  <div
    key={idx}
    onClick={() => onEventClick(ev, idx)}
    className={`
      text-[8px] sm:text-[10px] md:text-xs text-white px-1 py-0.5 
      rounded cursor-pointer hover:opacity-80 transition-opacity truncate
    `}
    style={{ backgroundColor: ev.color || '#ff9900' }}
    title={ev.title}
  >
    <span className="block sm:hidden">
      {ev.title.length > 8 ? ev.title.substring(0, 6) + '...' : ev.title}
    </span>
    <span className="hidden sm:block">{ev.title}</span>
  </div>
))}

        
        {/* SHOW MORE BUTTON FOR MOBILE */}
        {hasMoreEvents && !showAllEvents && (
          <button
            onClick={() => setShowAllEvents(true)}
            className="text-[8px] sm:text-[10px] text-orange-600 hover:text-orange-800 font-medium w-full text-center py-1 bg-orange-50 rounded"
          >
            +{events.length - maxVisibleEvents} more
          </button>
        )}
        
        {/* SHOW LESS BUTTON */}
        {showAllEvents && hasMoreEvents && (
          <button
            onClick={() => setShowAllEvents(false)}
            className="text-[8px] sm:text-[10px] text-orange-600 hover:text-orange-800 font-medium w-full text-center py-1 bg-orange-50 rounded"
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
}

// Drop Target Time Slot Component for Week View
function WeekTimeSlot({ date, timeSlot, events, onDrop, onEventClick }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CATEGORY,
    drop: (item) => onDrop(date, timeSlot, item), // Pass category info (name, color)
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`
        border-r border-orange-400 border-b 
        p-1 sm:p-2 md:p-3 lg:p-4
        relative last:border-r-0 
        transition-colors 
        min-h-[60px] sm:min-h-[60px] md:min-h-[60px] lg:min-h-[60px]
        ${isOver ? 'bg-orange-50' : 'bg-white'}
      `}
    >
      {/* Dropped events */}
      {events.map((event, idx) => (
        <div
          key={idx}
          onClick={() => onEventClick(event, idx)}
          className={`
            rounded-md text-white 
            text-xs sm:text-sm md:text-base
            leading-tight shadow-sm 
            p-1 sm:p-2 md:p-2.5
            mb-1 sm:mb-1.5 md:mb-2
            cursor-pointer hover:opacity-80 
            transition-opacity
            max-w-full
          `}
          style={{ backgroundColor: event.color || '#f3f3f3' }}
        >
          <div className="font-medium truncate text-xs sm:text-sm md:text-base">
            {event.title}
          </div>
          <div className="text-[8px] sm:text-[10px] md:text-xs opacity-90 truncate">
            {timeSlot}
          </div>
        </div>
      ))}
    </div>
  );
}


// Drop Target Time Slot Component for Day View
function DayTimeSlot({ timeSlot, events, onDrop, onEventClick }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.CATEGORY,
    drop: (item) => onDrop(timeSlot, item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div
  ref={drop}
  className={`
    min-h-[40px] sm:min-h-[50px] md:min-h-[60px] lg:min-h-[70px]
    p-2 sm:p-3 md:p-4 lg:p-5
    relative transition-colors 
    ${isOver ? 'bg-orange-50' : 'hover:bg-orange-50'}
  `}
>
  {/* Dropped events */}
  {events.map((event, idx) => (
    <div
      key={idx}
      onClick={() => onEventClick(event, idx)}
      className={`
        rounded-lg text-white 
        text-xs sm:text-sm md:text-base
        shadow-sm 
        p-2 sm:p-3 md:p-4
        mb-1 sm:mb-2 md:mb-3
        cursor-pointer hover:opacity-80 
        transition-opacity
        max-w-full
      `}
      style={{ backgroundColor: event.color || '#f3f3f3' }}
    >
      <div className="font-medium truncate text-xs sm:text-sm md:text-base lg:text-lg">
        {event.title}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm opacity-90 mt-0.5 sm:mt-1 truncate">
        {timeSlot}
      </div>
    </div>
  ))}

  {/* Drop zone indicator */}
  {isOver && (
    <div className="
      absolute inset-0 
      border-2 border-dashed border-orange-300 
      rounded-lg bg-orange-50 bg-opacity-50 
      flex items-center justify-center
      p-2 sm:p-4
    ">
      <span className="
        text-orange-600 
        text-xs sm:text-sm md:text-base lg:text-lg
        font-medium text-center
      ">
        Drop here
      </span>
    </div>
  )}
</div>
  );
}

export default ClientSchedule;