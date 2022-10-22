const dialogMenu = document.querySelector('#menu');

function menu() {
    try {
        dialogMenu.showModal();
    } catch (error) {
        console.error(error);
    }
}

document.querySelector('#close-menu').addEventListener('click', () => {
    dialogMenu.close();
});