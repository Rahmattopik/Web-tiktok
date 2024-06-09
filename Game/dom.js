document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    const angkaDisplay = document.querySelector('.angka');
    const isiDisplay = document.querySelector('.isi');
    const random = document.querySelector('.rdm');
   const cek = document.querySelector('.cek');
    
    // Generate random number between 1 and 9
    random.addEventListener('click', () => {
        const randomAngka = Math.floor(Math.random() * 9) + 1;
        angkaDisplay.textContent = randomAngka;
        angkaDisplay.style.display = 'none';
        
        
    });
    
    // Add event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
          
          
            const a = event.target.textContent;
            isiDisplay.textContent = a;

            if (isiDisplay.textContent === angkaDisplay.textContent) {
                // Memunculkan kembali elemen 'angkaDisplay'
                angkaDisplay.style.display = 'block';
                
                // Mengubah properti CSS lainnya di sini
                cek.textContent="benar"
                // element.style.propertyName2 = 'value2';
                console.log("benar");
                
            } else {
              
          cek.textContent="salah"
                console.log("salah");
            }
        });
    });
});