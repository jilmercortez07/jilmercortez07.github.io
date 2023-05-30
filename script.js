document.addEventListener('DOMContentLoaded', function() {
    const user = document.getElementById('boxOne');
   
  
    const frontendProjectMain = {
      person1: {
        nombre: 'Random Country Generator',
        date: 'May 16, 2023',
        image: "./images/random.png",
        link: "./CountryGenerator/index.html"
      },
      person2: {
        nombre: 'Bitcoin Halve Countdown',
        date: 'May 16, 2023',
        image: "./images/Bitcoin.png",
        link:  "./BitcoinHalveCountdown/index.html"
      },
      person3: {
        nombre: '',
        date: '',
        image: ""
      },
      person4: {
        nombre: 'jilmer',
        date: 'deeznuts',
        image: ""
      },
      
    };
    let counter = 0; // Counter to keep track of the number of squares
  
    for (let key in frontendProjectMain) {
      if (counter >= 3) {
        break; // Exit the loop after three squares have been created
      }
  
    
      const boxWrapper = document.createElement('div');
      boxWrapper.classList.add('box-wrapper');
      user.appendChild(boxWrapper);
  
      const square = document.createElement('div');
      square.classList.add('square');
      boxWrapper.appendChild(square);
  
      const nameLabel = document.createElement('div');
      nameLabel.classList.add('label');
      nameLabel.textContent =  frontendProjectMain[key].nombre;
      boxWrapper.appendChild(nameLabel);
  
      const dateLabel = document.createElement('div');
      dateLabel.classList.add('label');
      dateLabel.textContent = frontendProjectMain[key].date;
      boxWrapper.appendChild(dateLabel);


      const imageLink = document.createElement('a');
      imageLink.href = frontendProjectMain[key].link;
      imageLink.target = "_blank"
  
      const image = document.createElement('img');
      image.src = frontendProjectMain[key].image;
      image.classList.add('square-image');
      square.appendChild(image);

      imageLink.appendChild(image);
      square.appendChild(imageLink)

      counter ++
    } 
  });
  




// BOX TWO User interface




document.addEventListener('DOMContentLoaded', function() {
    const userInterfaceContainer = document.getElementById('boxTwo');
    const modalContainer = document.getElementById('modalContainerTwo');
    const modalImage = document.getElementById('modalImageTwo');

    const names = {
      person1: {
        nombre: 'Music player',
        date: 'May 16, 2023',
        image: "./images/theWeeknd.png",
        
      },
      person2: {
        nombre: 'Payment screen',
        date: 'May 16, 2023',
        image: "./images/payment.png",
      },
      person3: {
        nombre: 'Nike landing page',
        date: 'May 16, 2023',
        image: "./images/nike.png",
      },
      
    };
  

  
    for (let key in names) {
     
  
      const boxWrapper = document.createElement('div');
      boxWrapper.classList.add('box-wrapper');
      userInterfaceContainer.appendChild(boxWrapper);
  
      const square = document.createElement('div');
      square.classList.add('square');
      boxWrapper.appendChild(square);
  
      const nameLabel = document.createElement('div');
      nameLabel.classList.add('label');
      nameLabel.textContent =  names[key].nombre;
      boxWrapper.appendChild(nameLabel);
  
      const dateLabel = document.createElement('div');
      dateLabel.classList.add('label');
      dateLabel.textContent =  names[key].date;
      boxWrapper.appendChild(dateLabel);

      const image = document.createElement('img');
      image.src = names[key].image;
      image.classList.add('square-image');
      square.appendChild(image);


      if (key === 'person3'){
        image.classList.add('nike')
      }
        // Add click event listener to each image
        image.addEventListener('click', function() {
            modalImageTwo.src = names[key].image;
            modalContainerTwo.classList.toggle('modal-open');
          });
        }
      
        // Close the modal when clicking outside the image
        modalContainerTwo.addEventListener('click', function(event) {
          if (event.target === modalContainerTwo) {
            modalContainerTwo.classList.remove('modal-open');
          }
        });
      });
    

     
  // BOX THREE  User Interface Projects



  document.addEventListener('DOMContentLoaded', function() {
    const userInterfaceContainer = document.getElementById('boxThree');
    const modalContainer = document.getElementById('modalContainer');
    const modalImage = document.getElementById('modalImage');
  
    const names = {
      person1: {
        nombre: 'Music player',
        date: 'May 16, 2023',
        image: "./images/theWeeknd.png",
        
      },
      person2: {
        nombre: 'Payment screen',
        date: 'May 16, 2023',
        image: "./images/payment.png",
      },
      person3: {
        nombre: 'Nike landing page',
        date: 'May 16, 2023',
        image: "./images/nike.png",
      },
       
    
  
    };
  
    for (let key in names) {
      const boxWrapper = document.createElement('div');
      boxWrapper.classList.add('box-wrapper');
      userInterfaceContainer.appendChild(boxWrapper);
  
      const squareThree = document.createElement('div');
      squareThree.classList.add('squareThree');
      boxWrapper.appendChild(squareThree);
  
      const nameLabel = document.createElement('div');
      nameLabel.classList.add('labelThree');
      nameLabel.textContent =  names[key].nombre;
      boxWrapper.appendChild(nameLabel);
  
      const dateLabel = document.createElement('div');
      dateLabel.classList.add('labelThree');
      dateLabel.textContent = 'Date: ' + names[key].date;
      boxWrapper.appendChild(dateLabel);
  
      const image = document.createElement('img');
      image.src = names[key].image;
      image.classList.add('square-image');
      squareThree.appendChild(image);

      if(key === 'person3') {
        image.classList.add('nike')
      }
  
      // Add click event listener to each image
      image.addEventListener('click', function() {
        modalImage.src = names[key].image;
        modalContainer.classList.toggle('modal-open');
      });
    }
  
    // Close the modal when clicking outside the image
    modalContainer.addEventListener('click', function(event) {
      if (event.target === modalContainer) {
        modalContainer.classList.remove('modal-open');
      }
    });
  });
  





//Box four Front End Projects



document.addEventListener('DOMContentLoaded', function() {
  const user = document.getElementById('FrontEndBox');
 
  const frontendProject = {
    project1: {
      nombre: 'Random Country Generator',
      date: 'May 16, 2023',
      image: "./images/random.png",
      link: "./CountryGenerator/index.html"
    },
    project2: {
      nombre: 'Bitcoin Halve Countdown',
      date: 'May 16, 2023',
      image: "./images/Bitcoin.png",
      link:  "./BitcoinHalveCountdown/index.html"
    },
   
  };

  for (let key in frontendProject) {
    const boxWrapper = document.createElement('div');
    boxWrapper.classList.add('box-wrapper');
    user.appendChild(boxWrapper);

    const square = document.createElement('div');
    square.classList.add('squareFrontEnd');
    boxWrapper.appendChild(square);

    const nameLabel = document.createElement('div');
    nameLabel.classList.add('labelFrontEnd');
    nameLabel.textContent =  frontendProject[key].nombre;
    boxWrapper.appendChild(nameLabel);

    const dateLabel = document.createElement('div');
    dateLabel.classList.add('labelFrontEnd');
    dateLabel.textContent = frontendProject[key].date;
    boxWrapper.appendChild(dateLabel);

    const imageLink = document.createElement('a');
    imageLink.href = frontendProject[key].link;
    imageLink.target = "_blank";

    const image = document.createElement('img');
    image.src = frontendProject[key].image;
    image.classList.add('square-image');
    square.appendChild(image);

    imageLink.appendChild(image);
    square.appendChild(imageLink);
  } 
});
