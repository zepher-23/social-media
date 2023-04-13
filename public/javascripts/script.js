function menuClick () {
    const sidebar = document.getElementById('sidebar');
    const sideMenu = document.getElementById('main');
    sideMenu.classList.toggle('sidebar-active');
    sidebar.classList.toggle('hide-sidebar');
}

const handleUpload = () => {
    
}

const viewImage = (event) => {
    
        const image = document.getElementById('img-view');
        image.style.display = "flex";
    image.src = URL.createObjectURL(event.target.files[0]);
    viewCancelButton();
    
}

const viewCancelButton = () => {
    const cancelButton = document.querySelector('label[for="cancel-upload"]');
   
        cancelButton.style.display = "flex";
  
}

const removeImage = () => {
     const image = document.getElementById('img-view');
        image.style.display = "none";
    image.src = '';
    removeCancelButton();
}

const removeCancelButton = () => {
     const cancelButton = document.querySelector('label[for="cancel-upload"]');
   
        cancelButton.style.display = "none";
    
}