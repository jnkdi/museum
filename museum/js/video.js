const timeController = document.querySelector('.time-controller');
const volumeController = document.querySelector('.volume-controller');
  
timeController.addEventListener('input', function() {
  const value = this.value;
  this.style.background = `linear-gradient(to right, var(--dark-red) 0%, var(--dark-red) ${value}%, #434343 ${value}%, #434343 100%)`
})

volumeController.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, var(--dark-red) 0%, var(--dark-red) ${value}%, #434343 ${value}%, #434343 100%)`
  })