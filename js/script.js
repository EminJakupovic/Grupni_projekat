// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile sidebar toggle functionality
    const toggleSidebar = document.querySelector('.toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    
    toggleSidebar.addEventListener('click', function() {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('sidebar-active');
    });
    
    // Profile dropdown functionality
    const profileDropdown = document.getElementById('profileDropdown');
    const profileMenu = document.getElementById('profileMenu');
    
    profileDropdown.addEventListener('click', function() {
        profileMenu.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!profileDropdown.contains(event.target) && !profileMenu.contains(event.target)) {
            profileMenu.classList.remove('show');
        }
    });
    
    // Menu navigation system
    const menuItems = document.querySelectorAll('.menu-item');
    const mainContentArea = document.querySelector('.main-content');
    
    // Default dashboard content (store original content)
    const dashboardContent = mainContentArea.innerHTML;
    
 
    
    // Function to update main content based on selected menu item
    function updateContent(sectionName) {
        if (sectionContent[sectionName]) {
            mainContentArea.innerHTML = sectionContent[sectionName];
            
            // Update date display in the new content
            const dateDisplay = document.querySelector('.date-display');
            if (dateDisplay) {
                const currentDate = new Date();
                const days = ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];
                const months = ['januar', 'februar', 'mart', 'april', 'maj', 'juni', 'juli', 'august', 'septembar', 'oktobar', 'novembar', 'decembar'];
                const formattedDate = `${days[currentDate.getDay()]}, ${currentDate.getDate()}. ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}.`;
                dateDisplay.textContent = formattedDate;
            }
            
            // Initialize any interactive elements in the new content
            initializeInteractiveElements();
        }
    }
    
    // Initialize interactive elements in dynamically loaded content
    function initializeInteractiveElements() {
        // Initialize tab functionality if present
        const tabs = document.querySelectorAll('.tab');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to selected tab and content
                this.classList.add('active');
                document.getElementById(tabId + '-tests').classList.add('active');
            });
        });
        
        // Initialize checkboxes for tasks if present
        const taskCheckboxes = document.querySelectorAll('.task-checkbox input');
        
        taskCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const taskItem = this.closest('.task-item');
                if (this.checked) {
                    taskItem.classList.add('completed');
                } else {
                    taskItem.classList.remove('completed');
                }
            });
        });
    }
    
    // Add click event listeners to menu items
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get the section name from the span text
            const sectionName = this.querySelector('span').textContent;
            
            // Remove active class from all menu items
            menuItems.forEach(menuItem => {
                menuItem.classList.remove('active');
            });
            
            // Add active class to clicked menu item
            this.classList.add('active');
            
            // Update main content
            updateContent(sectionName);
        });
    });
    
    // Update current date on page load
    const dateDisplay = document.querySelector('.date-display');
    if (dateDisplay) {
        const currentDate = new Date();
        const days = ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];
        const months = ['januar', 'februar', 'mart', 'april', 'maj', 'juni', 'juli', 'august', 'septembar', 'oktobar', 'novembar', 'decembar'];
        const formattedDate = `${days[currentDate.getDay()]}, ${currentDate.getDate()}. ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}.`;
        dateDisplay.textContent = formattedDate;
    }
});



function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.querySelector('.main-content').innerHTML = data;
        })
        .catch(error => console.error('Greška pri učitavanju stranice:', error));
}

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const sectionName = this.querySelector('span').textContent.trim().toLowerCase();
            const pageMap = {
                "dashboard": "dashboard.html",
                "ocjene": "ocjene.html",
                "zadaci": "zadaci.html",
                "testovi": "testovi.html",
                "vannastavne aktivnosti": "sekcije.html",
                "vladanje": "vladanje.html"
                // Dodaj ostale sekcije
            };

            if (pageMap[sectionName]) {
                loadPage(pageMap[sectionName]);
            }
        });
    });
});









        // Function to show the selected semester
        function showSemester(semester) {
            // Hide all semester contents
            document.querySelectorAll('.semester-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Show the selected semester content
            document.getElementById(semester + '-semester').classList.add('active');
            
            // Update tab active state
            document.querySelectorAll('.semester-tab').forEach(tab => {
                tab.classList.remove('active');
            });
            
            // Find the clicked tab and make it active
            event.target.classList.add('active');
        }
        
        // Integration with existing SPA
        // This would be part of the main navigation system
        document.addEventListener('DOMContentLoaded', function() {
            // Example function to toggle between pages in the SPA
            function showPage(pageName) {
                // Hide all pages
                document.querySelectorAll('.main-content > div[class$="-page"]').forEach(page => {
                    page.style.display = 'none';
                });
                
                // Show selected page
                document.querySelector('.' + pageName + '-page').style.display = 'block';
                
                // Update sidebar menu active state
                document.querySelectorAll('.menu-item').forEach(item => {
                    item.classList.remove('active');
                    if(item.querySelector('span').textContent.toLowerCase() === pageName) {
                        item.classList.add('active');
                    }
                });
            }
            
            // Example event listener for sidebar menu items
            document.querySelectorAll('.menu-item').forEach(item => {
                item.addEventListener('click', function() {
                    const pageName = this.querySelector('span').textContent.toLowerCase();
                    showPage(pageName);
                });
            });
        });








        // DOM Elements
const gridViewBtn = document.getElementById('btn-grid');
const listViewBtn = document.getElementById('btn-list');
const calendarViewBtn = document.getElementById('btn-calendar');
const gridView = document.getElementById('grid-view');
const listView = document.getElementById('list-view');
const calendarView = document.getElementById('calendar-view');
const timeFilterSelect = document.querySelector('.filter-select:nth-of-type(1)');
const subjectFilterSelect = document.querySelector('.filter-select:nth-of-type(2)');

// Test data (would normally come from backend)
const tests = [
    {
        id: 1,
        subject: 'Hemija',
        type: 'Kontrolni test',
        date: new Date('2025-04-01'),
        description: 'Test obuhvata poglavlje 5: Organska hemija. Glavni fokus je na nomenklatura organskih spojeva, alkani, alkeni i alkini.',
        materials: [
            'Udžbenik, stranice 78-95',
            'Bilješke sa predavanja',
            'Laboratorijske vježbe'
        ],
        status: 'tomorrow'
    },
    {
        id: 2,
        subject: 'Engleski jezik',
        type: 'Pismeni rad',
        date: new Date('2025-04-03'),
        description: 'Esej na temu "Modern Technology". Potrebno je napisati između 250-300 riječi, obraditi prednosti i nedostatke modernih tehnologija.',
        materials: [
            'Udžbenik, Unit 5',
            'Primjeri eseja',
            'Vokabular vezan za tehnologiju'
        ],
        status: 'upcoming'
    },
    {
        id: 3,
        subject: 'Matematika',
        type: 'Pismeni rad',
        date: new Date('2025-04-07'),
        description: 'Test obuhvata integrali i izvodi. Sadržaj pokriva osnovna pravila deriviranja, integriranja i primjene integrala u zadacima.',
        materials: [
            'Udžbenik, poglavlje 7 i 8',
            'Svi primjeri sa vježbi',
            'Zadaci sa prethodnih testova'
        ],
        status: 'next-week'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set up view buttons
    gridViewBtn.addEventListener('click', switchToGridView);
    listViewBtn.addEventListener('click', switchToListView);
    calendarViewBtn.addEventListener('click', switchToCalendarView);
    
    // Set up filters
    timeFilterSelect.addEventListener('change', applyFilters);
    subjectFilterSelect.addEventListener('change', applyFilters);
    
    // Create list view since it doesn't exist in the HTML
    createListView();
    
    // Create calendar view since it doesn't exist in the HTML
    createCalendarView();
    
    // Apply initial filters
    applyFilters();
});

// View switching functions
function switchToGridView() {
    resetActiveButtons();
    gridViewBtn.classList.add('active');
    gridView.style.display = 'grid';
    listView.style.display = 'none';
    calendarView.style.display = 'none';
}

function switchToListView() {
    resetActiveButtons();
    listViewBtn.classList.add('active');
    gridView.style.display = 'none';
    listView.style.display = 'block';
    calendarView.style.display = 'none';
}

function switchToCalendarView() {
    resetActiveButtons();
    calendarViewBtn.classList.add('active');
    gridView.style.display = 'none';
    listView.style.display = 'none';
    calendarView.style.display = 'block';
}

function resetActiveButtons() {
    gridViewBtn.classList.remove('active');
    listViewBtn.classList.remove('active');
    calendarViewBtn.classList.remove('active');
}







// Filter function
function applyFilters() {
    const timeFilter = timeFilterSelect.value;
    const subjectFilter = subjectFilterSelect.value;
    
    // Apply filters to test data
    const filteredTests = tests.filter(test => {
        let passesTimeFilter = true;
        let passesSubjectFilter = true;
        
        // Time filter
        if (timeFilter === 'Sutra') {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            passesTimeFilter = isSameDay(test.date, tomorrow);
        } else if (timeFilter === 'Ovaj tjedan') {
            passesTimeFilter = isInCurrentWeek(test.date);
        } else if (timeFilter === 'Ovaj mjesec') {
            passesTimeFilter = isInCurrentMonth(test.date);
        }
        
        // Subject filter
        if (subjectFilter !== 'Svi predmeti') {
            passesSubjectFilter = test.subject === subjectFilter;
        }
        
        return passesTimeFilter && passesSubjectFilter;
    });
    
    // Update views
    updateGridView(filteredTests);
    updateListView(filteredTests);
    updateCalendarView(filteredTests);
}

// Date utility functions
function isSameDay(date1, date2) {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
}

function isInCurrentWeek(date) {
    const today = new Date();
    const firstDayOfWeek = new Date(today);
    const day = today.getDay() || 7; // Convert Sunday (0) to 7
    firstDayOfWeek.setDate(today.getDate() - day + 1); // Monday
    
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6); // Sunday
    
    return date >= firstDayOfWeek && date <= lastDayOfWeek;
}

function isInCurrentMonth(date) {
    const today = new Date();
    return date.getMonth() === today.getMonth() && 
           date.getFullYear() === today.getFullYear();
}

function getDaysUntil(date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diffTime = date.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Format date to local string
function formatDate(date) {
    const days = ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'];
    const day = days[date.getDay()];
    const dateString = date.toLocaleDateString('bs-BA', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    return `${dateString}. (${day})`;
}

// View update functions
function updateGridView(filteredTests) {
    // Clear existing content
    gridView.innerHTML = '';
    
    // Add filtered tests
    filteredTests.forEach(test => {
        const daysUntil = getDaysUntil(test.date);
        const formattedDate = formatDate(test.date);
        
        const testCard = document.createElement('div');
        testCard.className = 'test-card';
        
        // Determine status class based on days until test
        let statusClass = 'status-next-week';
        if (daysUntil === 1) {
            statusClass = 'status-tomorrow';
        } else if (daysUntil < 4) {
            statusClass = 'status-upcoming';
        }
        
        // Create card content
        testCard.innerHTML = `
            <div class="test-status ${statusClass}">${getStatusText(daysUntil)}</div>
            <div class="test-content">
                <div class="test-date">
                    <div class="date">${formattedDate}</div>
                    <div class="countdown">za ${daysUntil} ${getDayText(daysUntil)}</div>
                </div>
                <div class="test-details">
                    <div class="test-subject">${test.subject}</div>
                    <div class="test-type">${test.type}</div>
                    <div class="test-description">${test.description}</div>
                </div>
                <div class="test-materials">
                    <div class="materials-title">Materijali za pripremu:</div>
                    <ul class="materials-list">
                        ${test.materials.map(material => `
                            <li><i class="fas fa-${getMaterialIcon(material)}"></i> ${material}</li>
                        `).join('')}
                    </ul>
                </div>
                <div class="test-actions">
                    <div class="action-btn btn-secondary">
                        <i class="fas fa-bell"></i> Podsjeti me
                    </div>
                    <div class="action-btn btn-primary">
                        <i class="fas fa-eye"></i> Detalji
                    </div>
                </div>
            </div>
        `;
        
        gridView.appendChild(testCard);
    });
    
    // If no tests match, show message
    if (filteredTests.length === 0) {
        const noTestsMsg = document.createElement('div');
        noTestsMsg.className = 'no-tests-message';
        noTestsMsg.innerText = 'Nema testova koji odgovaraju odabranim filterima.';
        gridView.appendChild(noTestsMsg);
    }
}

// Create and update list view
function createListView() {
    // Create list view container if it doesn't exist
    if (!listView) {
        listView = document.createElement('div');
        listView.id = 'list-view';
        listView.className = 'test-list';
        listView.style.display = 'none';
        
        // Insert after grid view
        gridView.parentNode.insertBefore(listView, gridView.nextSibling);
    }
}

function updateListView(filteredTests) {
    // Clear existing content
    listView.innerHTML = '';
    
    // Add filtered tests
    filteredTests.forEach(test => {
        const daysUntil = getDaysUntil(test.date);
        const formattedDate = formatDate(test.date);
        
        // Determine status class
        let statusBarClass = 'status-next-week-bar';
        if (daysUntil === 1) {
            statusBarClass = 'status-tomorrow-bar';
        } else if (daysUntil < 4) {
            statusBarClass = 'status-upcoming-bar';
        }
        
        const testItem = document.createElement('div');
        testItem.className = 'test-item-row';
        
        testItem.innerHTML = `
            <div class="test-item-status ${statusBarClass}"></div>
            <div class="test-item-date">
                <div class="test-item-day">${test.date.getDate()}</div>
                <div class="test-item-full-date">${test.date.toLocaleDateString('bs-BA', {month: 'short'})}</div>
            </div>
            <div class="test-item-info">
                <div class="test-item-subject">${test.subject}</div>
                <div class="test-item-type">${test.type}</div>
            </div>
            <div class="test-item-actions">
                <div class="test-item-btn btn-remind">
                    <i class="fas fa-bell"></i>
                </div>
                <div class="test-item-btn btn-details">
                    <i class="fas fa-eye"></i>
                </div>
            </div>
        `;
        
        listView.appendChild(testItem);
    });
    
    // If no tests match, show message
    if (filteredTests.length === 0) {
        const noTestsMsg = document.createElement('div');
        noTestsMsg.className = 'no-tests-message';
        noTestsMsg.innerText = 'Nema testova koji odgovaraju odabranim filterima.';
        listView.appendChild(noTestsMsg);
    }
}

// Create and update calendar view
function createCalendarView() {
    // Create calendar view if it doesn't exist
    if (!calendarView) {
        calendarView = document.createElement('div');
        calendarView.id = 'calendar-view';
        calendarView.className = 'calendar-view';
        calendarView.style.display = 'none';
        
        // Insert after list view
        listView.parentNode.insertBefore(calendarView, listView.nextSibling);
    }
}

function updateCalendarView(filteredTests) {
    // Get current date for calendar
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    
    // Clear existing content
    calendarView.innerHTML = '';
    
    // Create calendar header
    const calendarHeader = document.createElement('div');
    calendarHeader.className = 'calendar-header';
    calendarHeader.innerHTML = `
        <div class="calendar-title">Kalendar testova</div>
        <div class="calendar-navigation">
            <div class="calendar-nav-btn" id="prev-month">
                <i class="fas fa-chevron-left"></i>
            </div>
            <div class="calendar-month">${today.toLocaleDateString('bs-BA', {month: 'long', year: 'numeric'})}</div>
            <div class="calendar-nav-btn" id="next-month">
                <i class="fas fa-chevron-right"></i>
            </div>
        </div>
    `;
    calendarView.appendChild(calendarHeader);
    
    // Create calendar grid
    const calendarGrid = document.createElement('div');
    calendarGrid.className = 'calendar-grid';
    
    // Add weekday headers
    const weekdays = ['Pon', 'Uto', 'Sri', 'Čet', 'Pet', 'Sub', 'Ned'];
    weekdays.forEach(day => {
        const weekdayElem = document.createElement('div');
        weekdayElem.className = 'calendar-weekday';
        weekdayElem.innerText = day;
        calendarGrid.appendChild(weekdayElem);
    });
    
    // Get first day of month and last day of month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    
    // Get day of week for first day (0 = Sunday, so we convert to 1-7 where 1 = Monday)
    let firstDayOfWeek = firstDay.getDay() || 7;
    
    // Calculate number of days to show from previous month
    const daysFromPrevMonth = firstDayOfWeek - 1;
    
    // Get last day of previous month
    const prevMonthLastDay = new Date(currentYear, currentMonth, 0).getDate();
    
    // Add days from previous month
    for (let i = daysFromPrevMonth - 1; i >= 0; i--) {
        const dayElem = document.createElement('div');
        dayElem.className = 'calendar-day';
        dayElem.innerHTML = `<div class="day-number">${prevMonthLastDay - i}</div>`;
        calendarGrid.appendChild(dayElem);
    }
    
    // Add days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
        const date = new Date(currentYear, currentMonth, i);
        const dayElem = document.createElement('div');
        
        // Add classes for styling
        dayElem.className = 'calendar-day current-month';
        
        // Check if it's today
        if (i === today.getDate()) {
            dayElem.classList.add('today');
        }
        
        // Get tests for this day
        const testsOnThisDay = filteredTests.filter(test => 
            test.date.getDate() === i && 
            test.date.getMonth() === currentMonth && 
            test.date.getFullYear() === currentYear
        );
        
        // Add class if there are tests on this day
        if (testsOnThisDay.length > 0) {
            dayElem.classList.add('has-tests');
        }
        
        // Add day number
        dayElem.innerHTML = `<div class="day-number">${i}</div>`;
        
        // Add test events
        testsOnThisDay.forEach(test => {
            const eventElem = document.createElement('div');
            eventElem.className = 'day-event';
            eventElem.innerText = test.subject;
            dayElem.appendChild(eventElem);
        });
        
        calendarGrid.appendChild(dayElem);
    }
    
    // Calculate how many days to show from next month
    const totalCells = 42; // 6 rows of 7 days
    const daysFromCurrentMonth = lastDay.getDate();
    const daysFromNextMonth = totalCells - daysFromPrevMonth - daysFromCurrentMonth;
    
    // Add days from next month
    for (let i = 1; i <= daysFromNextMonth; i++) {
        const dayElem = document.createElement('div');
        dayElem.className = 'calendar-day';
        dayElem.innerHTML = `<div class="day-number">${i}</div>`;
        calendarGrid.appendChild(dayElem);
    }
    
    calendarView.appendChild(calendarGrid);
    
    // Add event listeners for prev/next month
    document.getElementById('prev-month').addEventListener('click', () => {
        // Implementation for previous month would go here
        alert('Navigacija na prethodni mjesec');
    });
    
    document.getElementById('next-month').addEventListener('click', () => {
        // Implementation for next month would go here
        alert('Navigacija na sljedeći mjesec');
    });
}

// Helper functions
function getStatusText(daysUntil) {
    if (daysUntil === 1) return 'Test je sutra!';
    if (daysUntil < 4) return 'Nadolazeći test';
    return 'Sljedeća sedmica';
}

function getDayText(daysUntil) {
    if (daysUntil === 1) return 'dan';
    if (daysUntil >= 2 && daysUntil <= 4) return 'dana';
    return 'dana';
}

function getMaterialIcon(material) {
    if (material.includes('Udžbenik')) return 'book';
    if (material.includes('Bilješke')) return 'file-alt';
    if (material.includes('Laboratorijske')) return 'flask';
    if (material.includes('Primjeri')) return 'file-alt';
    if (material.includes('Vokabular')) return 'language';
    if (material.includes('Zadaci')) return 'calculator';
    return 'book';
}












