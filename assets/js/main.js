let minat = {}
let inputminat = document.getElementById('inputminat');
let listselectedminat = document.getElementById('listselectedminat');
let containerList = document.getElementById('containerList');
// HANDLE MINAT CARD

document.querySelectorAll('.minat').forEach(element => {
    const idMinat = element.getAttribute('idMinat');
    const text = element.innerHTML;
    minat[idMinat]=text;

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
        selected = Array.from(document.querySelectorAll('.minat.selected')).map(el => el.getAttribute('idMinat'));
        if (selected.length) {
            containerList.classList.add('flex');
            containerList.classList.remove('hidden');
        } else {
            containerList.classList.add('hidden');
            containerList.classList.remove('flex');
        }
        inputminat.value = selected  .join(',');
        el = "";
        selected.forEach(selectedminat=>{
            el+=`<li><p class="text-gray-400 pl-4">`+minat[selectedminat]+`</p></li>`
        })
        listselectedminat.innerHTML=el;
    });
});

function toggleModal(param){
document.getElementById(param).classList.toggle('hidden');

}

function showSuccessOverlay(){
let overlay = document.getElementById('success');
overlay.style.display = 'flex';
}