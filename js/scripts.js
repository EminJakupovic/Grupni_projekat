document.addEventListener('DOMContentLoaded', function() {
    // Dohvati potrebne elemente
    const settingsMenuItems = document.querySelectorAll('.menu-item:has(i.fas.fa-cog), .dropdown-item:has(i.fas.fa-cog)');
    const body = document.body;
    
    // Kreiraj overlay i modal elemente
    const overlay = document.createElement('div');
    overlay.className = 'settings-overlay';
    
    const modal = document.createElement('div');
    modal.className = 'settings-modal';
    modal.innerHTML = `
        <div class="settings-modal-header">
            <h2><i class="fas fa-cog"></i> Postavke sistema</h2>
            <button class="close-settings-modal"><i class="fas fa-times"></i></button>
        </div>
        <div class="settings-modal-content">
            <div class="settings-tabs">
                <div class="settings-tab active" data-tab="general">Općenito</div>
                <div class="settings-tab" data-tab="notifications">Obavještenja</div>
                <div class="settings-tab" data-tab="privacy">Privatnost</div>
            </div>
            
            <div class="settings-content">
                <!-- Općenito postavke -->
                <div class="settings-pane active" id="general-settings">
                    <div class="settings-section">
                        <h3>Korisnički račun</h3>
                        <div class="settings-item">
                            <div class="settings-item-label">Jezik</div>
                            <div class="settings-item-control">
                                <select class="settings-select">
                                    <option selected>Bosanski</option>
                                    <option>English</option>
                                    <option>Deutsch</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <div class="settings-section">
                        <h3>Sigurnost</h3>
                        <div class="settings-item">
                            <div class="settings-item-label">Dvofaktorska autentifikacija</div>
                            <div class="settings-item-control">
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div class="settings-item">
                            <div class="settings-item-label">Promjena lozinke</div>
                            <div class="settings-item-control">
                                <button class="settings-button">Promijeni</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Izgled postavke -->
                <div class="settings-pane" id="display-settings">
                    <div class="settings-section">
                        <h3>Tema</h3>
                        <div class="settings-item">
                            <div class="settings-item-label">Tamni način rada</div>
                            <div class="settings-item-control">
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="settings-section">
                        <h3>Prikaz</h3>
                        <div class="settings-item">
                            <div class="settings-item-label">Veličina fonta</div>
                            <div class="settings-item-control">
                                <select class="settings-select">
                                    <option>Mali</option>
                                    <option selected>Srednji</option>
                                    <option>Veliki</option>
                                </select>
                            </div>
                        </div>
                        <div class="settings-item">
                            <div class="settings-item-label">Kompaktni prikaz</div>
                            <div class="settings-item-control">
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Obavještenja postavke -->
                <div class="settings-pane" id="notifications-settings">
                    <div class="settings-section">
                        <h3>Email obavještenja</h3>
                        <div class="settings-item">
                            <div class="settings-item-label">Nove ocjene</div>
                            <div class="settings-item-control">
                                <label class="switch">
                                    <input type="checkbox" checked>
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div class="settings-item">
                            <div class="settings-item-label">Nadolazeći testovi</div>
                            <div class="settings-item-control">
                                <label class="switch">
                                    <input type="checkbox" checked>
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div class="settings-item">
                            <div class="settings-item-label">Školski eventi</div>
                            <div class="settings-item-control">
                                <label class="switch">
                                    <input type="checkbox" checked>
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="settings-section">
                        <h3>Push obavještenja</h3>
                        <div class="settings-item">
                            <div class="settings-item-label">Sve obavijesti</div>
                            <div class="settings-item-control">
                                <label class="switch">
                                    <input type="checkbox" checked>
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div class="settings-item">
                            <div class="settings-item-label">Zvuk</div>
                            <div class="settings-item-control">
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Privatnost postavke -->
                <div class="settings-pane" id="privacy-settings">
                    <div class="settings-section">
                        <h3>Privatnost profila</h3>
                        <div class="settings-item">
                            <div class="settings-item-label">Vidljivost profila</div>
                            <div class="settings-item-control">
                                <select class="settings-select">
                                    <option selected>Samo profesori</option>
                                    <option>Profesor i razred</option>
                                    <option>Škola</option>
                                </select>
                            </div>
                        </div>
                        <div class="settings-item">
                            <div class="settings-item-label">Prikaži moje ocjene</div>
                            <div class="settings-item-control">
                                <select class="settings-select">
                                    <option selected>Samo ja</option>
                                    <option>Ja i roditelji</option>
                                    <option>Ja, roditelji i profesori</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="settings-section">
                        <h3>Podaci</h3>
                        <div class="settings-item">
                            <div class="settings-item-label">Preuzmi moje podatke</div>
                            <div class="settings-item-control">
                                <button class="settings-button">Preuzmi</button>
                            </div>
                        </div>
                        <div class="settings-item">
                            <div class="settings-item-label">Brisanje računa</div>
                            <div class="settings-item-control">
                                <button class="settings-button danger">Izbriši</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="settings-modal-footer">
            <button class="settings-button cancel">Odustani</button>
            <button class="settings-button primary">Spremi promjene</button>
        </div>
    `;
    
    // Dodaj elemente u DOM
    body.appendChild(overlay);
    body.appendChild(modal);
    
    // Dodaj event listenere za otvaranje modala
    settingsMenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            openSettingsModal();
        });
    });
    
    // Dodaj event listenere za zatvaranje modala
    overlay.addEventListener('click', closeSettingsModal);
    modal.querySelector('.close-settings-modal').addEventListener('click', closeSettingsModal);
    modal.querySelector('.settings-button.cancel').addEventListener('click', closeSettingsModal);
    modal.querySelector('.settings-button.primary').addEventListener('click', function() {
        // Ovdje bi se trebale spremiti promjene
        closeSettingsModal();
    });
    
    // Funkcija za otvaranje modala
    function openSettingsModal() {
        overlay.classList.add('active');
        modal.classList.add('active');
        body.classList.add('modal-open');
    }
    
    // Funkcija za zatvaranje modala
    function closeSettingsModal() {
        overlay.classList.remove('active');
        modal.classList.remove('active');
        body.classList.remove('modal-open');
    }
    
    // Upravljanje tabovima za postavke
    const settingsTabs = document.querySelectorAll('.settings-tab');
    const settingsPanes = document.querySelectorAll('.settings-pane');
    
    settingsTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Ukloni aktivnu klasu sa svih tabova i panela
            settingsTabs.forEach(t => t.classList.remove('active'));
            settingsPanes.forEach(p => p.classList.remove('active'));
            
            // Postavi aktivnu klasu na odabrani tab
            this.classList.add('active');
            
            // Prikaži odgovarajući panel
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId + '-settings').classList.add('active');
        });
    });
});



// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the settings menu items
    const sidebarSettingsItem = document.querySelector('.sidebar-menu .menu-item:last-child');
    const profileSettingsItem = document.querySelector('.dropdown-menu .dropdown-item:nth-child(1)');
    
    // Create modal HTML structure and append to body
    const modal = document.createElement('div');
    modal.className = 'pos-settings-modal';
    modal.innerHTML = `
        <div class="pos-settings-modal-overlay"></div>
        <div class="pos-settings-modal-container">
            <div class="pos-settings-modal-header">
                <h2>Moj Profil</h2>
                <button class="pos-settings-modal-close"><i class="fas fa-times"></i></button>
            </div>
            <div class="pos-settings-modal-content">
                <div class="pos-settings-profile-section">
                    <div class="pos-profile-picture">
                        <i class="fas fa-user-graduate"></i>
                        <div class="pos-change-picture">
                            <i class="fas fa-camera"></i>
                        </div>
                    </div>
                    <div class="pos-profile-info-edit">
                        <h3>Emin Jakupović</h3>
                        <p>Učenik, IX-3</p>
                    </div>
                </div>
                
                <div class="pos-settings-tabs">
                    <div class="pos-settings-tab active" data-tab="personal">Osobni podaci</div>
                    <div class="pos-settings-tab" data-tab="security">Sigurnost</div>
                </div>
                
                <div class="pos-settings-tab-content active" id="personal-tab">
                    <div class="pos-form-group">
                        <label>Ime</label>
                        <input type="text" value="Emin">
                    </div>
                    <div class="pos-form-group">
                        <label>Prezime</label>
                        <input type="text" value="Jakupović">
                    </div>
                    <div class="pos-form-group">
                        <label>Email</label>
                        <input type="email" value="emin.jakupovic@osbs.edu">
                    </div>
                    <div class="pos-form-group">
                        <label>Telefon</label>
                        <input type="tel" value="+387 62 396 736">
                    </div>
                    <div class="pos-form-group">
                        <label>Datum rođenja</label>
                        <input type="date" value="08-06-2010">
                    </div>
                    <div class="pos-form-group">
                        <label>Adresa</label>
                        <input type="text" value="Ulica 123">
                    </div>
                                        <div class="pos-settings-button-group">
                    <button class="pos-btn-cancel">Odustani</button>
                    <button class="pos-btn-save">Spremi promjene</button>
                </div>
                </div>
                
                
                <div class="pos-settings-tab-content" id="security-tab">
                    <div class="pos-form-group">
                        <label>Trenutna lozinka</label>
                        <input type="password" placeholder="Unesite trenutnu lozinku">
                    </div>
                    <div class="pos-form-group">
                        <label>Nova lozinka</label>
                        <input type="password" placeholder="Unesite novu lozinku">
                    </div>
                    <div class="pos-form-group">
                        <label>Potvrdi novu lozinku</label>
                        <input type="password" placeholder="Ponovo unesite novu lozinku">
                    </div>
                    <div class="pos-settings-button-group">
                    <button class="pos-btn-cancel">Odustani</button>
                    <button class="pos-btn-save">Spremi promjene</button>
                </div>
                </div>
            </div>
        </div>
    `;
    // Add event listeners for tab switching
    const tabHeaders = modal.querySelectorAll('.pos-settings-tab');
    const tabContents = modal.querySelectorAll('.pos-settings-tab-content');

    tabHeaders.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs and contents
            tabHeaders.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked tab and corresponding content
            this.classList.add('active');
            const targetTab = this.getAttribute('data-tab') + '-tab';
            document.getElementById(targetTab).classList.add('active');
        });
    });
    document.body.appendChild(modal);
    
    // Function to toggle modal
    function toggleModal() {
        modal.classList.toggle('active');
        document.body.classList.toggle('modal-open');
    }
    
    // Add click event listeners
    sidebarSettingsItem.addEventListener('click', toggleModal);
    profileSettingsItem.addEventListener('click', toggleModal);
    
    // Close modal when clicking on close button or overlay
    const closeButton = modal.querySelector('.pos-settings-modal-close');
    const overlay = modal.querySelector('.pos-settings-modal-overlay');
    closeButton.addEventListener('click', toggleModal);
    overlay.addEventListener('click', toggleModal);
    
    // Cancel button functionality
    const cancelButton = modal.querySelector('.btn-cancel');
    cancelButton.addEventListener('click', toggleModal);
    
    // Tab switching functionality
    const tabs = modal.querySelectorAll('.pos-settings-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab content
            const tabContents = modal.querySelectorAll('.pos-settings-tab-content');
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Show selected tab content
            const tabName = this.getAttribute('data-tab');
            document.getElementById(tabName + '-tab').classList.add('active');
        });
    });
    
    // Save button functionality (just for demonstration)
    const saveButton = modal.querySelector('.btn-save');
    saveButton.addEventListener('click', function() {
        // Show a success message or animation
        const successMessage = document.createElement('div');
        successMessage.className = 'pos-settings-save-success';
        successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Promjene uspješno spremljene!';
        modal.querySelector('.pos-settings-modal-content').appendChild(successMessage);
        
        // Remove the message after 2 seconds
        setTimeout(() => {
            successMessage.remove();
            toggleModal();
        }, 2000);
    });
});





