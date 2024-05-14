// HANDLE MINAT CARD
document.querySelectorAll('.minat').forEach(element => {
    element.addEventListener('click', () => {
        const selectedElements = document.querySelectorAll('.minat.selected');
        if (element.classList.contains('selected')) {
            // If the element is already selected, deselect it
            element.classList.remove('selected');
            element.classList.add('hover:border-4', 'hover:border-accent', 'hover:text-accent');
        } else {
            // If the element is not selected, check if we can select more
            if (selectedElements.length >= 5) {
                
                return;
            }
            element.classList.add('selected');
            element.classList.remove('hover:border-4', 'hover:border-accent', 'hover:text-accent');
        }

        // Update the hidden input value with all selected ids
        const selectedIds = Array.from(document.querySelectorAll('.minat.selected')).map(el => el.getAttribute('idMinat'));
        document.getElementById('inputminat').value = selectedIds.join(',');
    });
});

function showModal(param){
document.getElementById(param).classList.add('flex');
document.getElementById(param).classList.remove('hidden');

}
function hideModal(param){
document.getElementById(param).classList.add('hidden');
document.getElementById(param).classList.remove('flex');

}
function showSuccessOverlay(){
let overlay = document.getElementById('success');
overlay.style.display = 'flex';
}