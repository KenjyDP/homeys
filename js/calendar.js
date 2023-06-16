document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek'
      },
      initialDate: '2023-06-07',
      events: [
        {
          start: '2023-01-01',
          end: '2023-01-22',
          display: 'background',
          overlap: false,
          color: '#ff9f89'
        },
        {
          start: '2023-02-26',
          end: '2023-03-10',
          display: 'background',
          overlap: false,
          color: '#ff9f89'
        },
        {
          start: '2023-05-01',
          end: '2023-06-30',
          overlap: false,
          display: 'background',
          color: '#ff9f89'
        },
        {
          start: '2023-07-31',
          end: '2023-09-30',
          overlap: false,
          display: 'background',
          color: '#ff9f89'
        },
        {
            start: '2023-10-01',
            end: '2023-11-07',
            overlap: false,
            display: 'background',
            color: '#ff9f89'
          },
          {
            start: '2024-04-30',
            end: '2024-05-31',
            overlap: false,
            display: 'background',
            color: '#ff9f89'
          }
      ]
    });
  
    calendar.render();
  });