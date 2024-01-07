function changePage(pageNumber) {
    // Скрываем все страницы
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
      page.classList.remove('active');
    });

    // Показываем выбранную страницу
    var selectedPage = document.getElementById('page' + pageNumber);
    if (selectedPage) {
      selectedPage.classList.add('active');
    }

    // Сбрасываем стиль активной кнопки
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button) {
      button.classList.remove('active');
    });

    // Выделяем активную кнопку
    var activeButton = document.querySelector('.button:nth-child(' + pageNumber + ')');
    if (activeButton) {
      activeButton.classList.add('active');
    }
}
  


function openModal(productName, imageURL, description, sizes, addOns, price) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    var modalProductInfo = document.getElementById('modalProductInfo');
    var modalSizeButtons = document.getElementById('modalSizeButtons');
    var modalAddOnButtons = document.getElementById('modalAddOnButtons');
    var modalPrice = document.getElementById('modalPrice');

    modalImage.src = imageURL;
    modalProductInfo.innerHTML = `<h2>${productName}</h2><p>${description}</p>`;
    modalSizeButtons.innerHTML = sizes.map(size => `<button class='size-button' onclick="selectSize('${size}')">${size}</button>`).join('');
    modalAddOnButtons.innerHTML = addOns.map(addOn => `<button class='add-on-button' onclick="selectAddOn('${addOn}')">${addOn}</button>`).join('');
    modalPrice.textContent = `Price from: ${price}`;

    modal.style.display = 'flex';
  }

  function selectSize(size) {
    //выбор размера
    console.log(`Selected Size: ${size}`);
  }

  function selectAddOn(addOn) {
    // выбор добавки
    console.log(`Selected Add-On: ${addOn}`);
  }

  function closeModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }




function initMap() {
            // Адрес
            const coffeeShopAddress = '8558, Green Rd., LA';

            // Получение координат
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: coffeeShopAddress }, function (results, status) {
                if (status === 'OK' && results[0].geometry) {
                    const coffeeShopLocation = results[0].geometry.location;

                    // Открываем модальное окно при нажатии на адрес
                    const addressLink = document.getElementById('addressLink');
                    addressLink.addEventListener('click', function () {
                        // Отображаем модальное окно
                        document.getElementById('modalMap').style.display = 'flex';

                        
                        const mapInModal = new google.maps.Map(document.getElementById('mapInModal'), {
                            center: coffeeShopLocation,
                            zoom: 15
                        });

                        
                        const marker = new google.maps.Marker({
                            position: coffeeShopLocation,
                            map: mapInModal,
                            title: 'Resourse Coffee House'
                        });
                      
                      document.getElementById('modalMap').addEventListener('click', function (event) {
                            if (event.target === this) {
                                document.getElementById('modalMap').style.display = 'none';
                            }
                        });
                    });
                } else {
                    console.error('Не удалось получить координаты для указанного адреса.');
                }
            });
        }




  
