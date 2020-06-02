// Init GitHub
const github = new GitHub();
// Init UI
const ui = new UI();

// Search Input
const searchUser = document.querySelector('#search-user');

// Search Input Event Listener
searchUser.addEventListener('keyup', (event) => {
    // Get Input Text
    const userText = event.target.value;

    if (userText !== '') {
        // Make HTTP call

        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        // clear profile
        ui.clearProfile();
    }
});