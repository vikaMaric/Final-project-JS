const sliderImages = document.getElementById('slider-images');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const indicators = document.querySelectorAll('.indicator');
  const title = document.getElementById('slide-title');
  const text = document.getElementById('slide-text');
  const price = document.getElementById('slide-price');

  const slides = [
    { title: 'S’mores Frappuccino', text: 'This new drink takes an espresso and mixes it with brown sugar and cinnamon before being topped with oat milk.', price: '$5.50' },
    { title: 'Caramel Macchiato', text: 'Fragrant and unique classic espresso with rich caramel-peanut syrup, with cream under whipped thick foam.', price: '$5.00' },
    { title: 'Ice coffee', text: 'A popular summer drink that tones and invigorates. Prepared from coffee, milk and ice.', price: '$4.50' }
  ];

  let currentSlide = 0;

  function updateSlide() {
    const percentage = -currentSlide * 100 + '%';
    sliderImages.style.transform = 'translateX(' + percentage + ')';
    title.innerText = slides[currentSlide].title;
    text.innerText = slides[currentSlide].text;
    price.innerText = slides[currentSlide].price;

    indicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });

    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
  }

  function prevSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlide();
    }
  }

  function nextSlide() {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlide();
    }
  }

updateSlide();




function initMap() {
            // Адрес вашей кофейни
            const coffeeShopAddress = '8558, Green Rd., LA';

            // Получите координаты с использованием геокодирования
            const geocoder = new google.maps.Geocoder();
            geocoder.geocode({ address: coffeeShopAddress }, function (results, status) {
                if (status === 'OK' && results[0].geometry) {
                    const coffeeShopLocation = results[0].geometry.location;

                    // Открывайте модальное окно при нажатии на адрес
                    const addressLink = document.getElementById('addressLink');
                    addressLink.addEventListener('click', function () {
                        // Отображайте модальное окно
                        document.getElementById('modalMap').style.display = 'flex';

                        // Создайте новую карту в модальном окне и установите центр
                        const mapInModal = new google.maps.Map(document.getElementById('mapInModal'), {
                            center: coffeeShopLocation,
                            zoom: 15
                        });

                        // Добавьте маркер для кофейни в модальное окно
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




