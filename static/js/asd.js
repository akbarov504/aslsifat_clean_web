

const uz = new Map([
  ['brand_name', 'AslSifat Clean'],

  ['nav_home', 'Bosh sahifa'],
  ['nav_services', 'Xizmatlar'],
  ['nav_works', 'Qanday ishlaydi'],
  ['nav_reviews', 'Mijozlar fikrlari'],
  ['nav_contact', 'Aloqa'],
  ['nav_order', 'buyurtma berish'],

  ['hero_badge', 'Premium xizmat'],
  ['hero_title', 'Uyingiz oldida Professional gilam tozalash xizmati'],
  ['hero_desc', 'Gilamlaringizni olib ketamiz, ularni professional uskunalar yordamida chuqur tozalaymiz va toza hamda yangidek holatda qaytarib yetkazib beramiz.'],
  ['hero_btn_order', 'Buyurtma berish'],
  ['hero_btn_call', 'Qo‘ng‘iroq qiling'],

  ['services_title', 'Kompleks parvarish'],
  ['services_desc', 'Har bir mato turi va tozalash ehtiyojiga moslashtirilgan yechimlar.'],

  ['service_wash_title', 'Gilam yuvish'],
  ['service_wash_desc', 'Tolalar ichiga chuqur kirib borib, yillar davomida to‘plangan kirlarni yo‘q qiladigan zamonaviy sanoat darajasidagi yuvish jarayoni.'],

  ['service_deep_title', 'Chuqur gilam tozalash'],
  ['service_deep_desc', 'Oddiy yuvishdan ko‘ra ko‘proq parvarish talab qiladigan nozik tolali gilamlar uchun maxsus bug‘li tozalash usuli.'],
  ['service_deep_note', 'Barcha gilamlar uchun kiritilgan'],

  ['service_stain_title', 'Dog‘larni ketkazish'],
  ['service_stain_desc', 'Sharob, siyoh va qahva dog‘lari uchun maxsus kimyoviy tozalash usullari.'],

  ['service_dust_title', 'Chang & hidlarni yo‘qotish'],
  ['service_dust_desc', 'Uy hayvonlari hidlari va allergenlarni chuqur darajada yo‘qotib, sog‘lom uy muhitini ta’minlaymiz.'],

  ['service_delivery_title', 'Olib ketish & Yetkazib berish'],
  ['service_delivery_desc', 'Og‘ir ishlarni biz bajaramiz. Eshikdan eshikkacha xizmat — qo‘shimcha to‘lovsiz.'],

  ['works_title', 'Oddiy 4 bosqichli jarayon'],

  ['step1_title', 'Qo‘ng‘iroq qiling'],
  ['step1_desc', 'Gilamni olib ketish vaqtini bizning jamoamiz bilan kelishib oling.'],

  ['step2_title', 'Olib ketish'],
  ['step2_desc', 'Gilamlaringizni uyingiz eshigidan bevosita olib ketamiz.'],

  ['step3_title', 'Yuvish'],
  ['step3_desc', 'Maxsus jihozlangan ustaxonamizda chuqur sanoat darajasida tozalash amalga oshiriladi.'],

  ['step4_title', 'Yetkazib berish'],
  ['step4_desc', 'Gilamlaringizni toza, quruq va yangidek holatda qaytarib yetkazib beramiz.'],

  ['before_label', 'Oldin'],
  ['after_label', 'Keyin'],

  ['adv_title', 'AslSifat ustunligi'],

  ['adv_equipment_title', 'Professional uskunalar'],
  ['adv_equipment_desc', 'Yuqori natija uchun sanoat darajasidagi ekstraktorlar va quritish uskunalari.'],

  ['adv_safe_title', 'Xavfsiz vositalar'],
  ['adv_safe_desc', 'Gipoallergen va uy hayvonlari uchun xavfsiz tozalash vositalari.'],

  ['adv_fast_title', 'Tezkor xizmat'],
  ['adv_fast_desc', 'Standart tozalash va yetkazib berish 48–72 soat ichida amalga oshiriladi.'],

  ['adv_staff_title', 'Tajribali mutaxassislar'],
  ['adv_staff_desc', 'Turli xil tolalar (materiallar) turlarini yaxshi tushunadigan malakali mutaxassislar.'],

  ['reviews_title', 'Mijozlarimiz nima deydi'],

  ['review1_text', '“Xizmat ajoyib darajada zo‘r. 10 yillik fors gilamim xuddi yangidek bo‘lib qoldi. Olib ketish va qaytarib berish jarayoni juda qulay va muammosiz bo‘ldi.”'],
  ['review1_name', 'Ravshan S.'],
  ['review1_role', 'Uy egasi'],

  ['review2_text', '“Men foydalangan eng yaxshi gilam tozalash xizmati. Ular boshqa kompaniyalar olib tashlay olmagan dog‘larni ham tozalashga muvaffaq bo‘lishdi.”'],
  ['review2_name', 'Gulmira T.'],
  ['review2_role', 'Uy egasi'],

  ['review3_text', '“Tezkor, professional va narxiga juda munosib xizmat. Gilamlar juda yoqimli hidga ega bo‘lib, juda yumshoq bo‘lib qoldi. Albatta tavsiya qilaman!”'],
  ['review3_name', 'Dilnoza K.'],
  ['review3_role', 'Business egasi'],

  ['cta_title', 'Gilamlaringizga yangi hayot baxsh eting'],
  ['cta_desc', 'Professional xizmat farqini his qiling. Gilamni olib ketish xizmatiga bugunoq buyurtma bering.'],
  ['cta_btn_order', 'Buyurtma berish'],
  ['cta_btn_call', 'Qo‘ng‘iroq qiling'],
['contact_title', 'Bog‘lanamiz'],
  ['contact_address_title', 'Manzil'],
  ['contact_address_desc', 'Toshkent viloyati, Zangiota tumani Ramadan mahallasi MFI'],
  ['contact_time_title', 'Ish vaqti'],
  ['contact_time_desc', '24/7'],
  ['contact_social_title', 'Aloqa & Ijtimoiy tarmoq'],
  ['contact_instagram', 'Instagram @aslsifat_clean'],

  ['form_name_label', 'Ism'],
  ['form_phone_label', 'Telefon raqam'],
  ['form_size_label', 'Gilam o‘lchami / Tafsilotlari'],
  ['form_message_label', 'Xabar'],

  ['opt_default', 'O‘lcham turini tanlang'],
  ['opt_small', 'Kichik (4 m² gacha)'],
  ['opt_medium', 'O‘rta (4–10 m²)'],
  ['opt_large', 'Katta (10 m² dan katta)'],

  ['form_submit', 'So‘rov yuborish'],

  ['footer_brand', 'AslSifat Clean'],
  ['footer_contact', 'Aloqa ma’lumotlari'],
  ['footer_hours', 'Ish vaqti'],
  ['footer_social', 'Ijtimoiy tarmoq'],
  ['footer_copy', '© 2026 AslSifat Clean. All rights reserved.'],
  ['footer_privacy', 'Privacy Policy'],
  ['footer_terms', 'Terms of Service']
]);

const ru = new Map([
  ['brand_name', 'AslSifat Clean'],

  ['nav_home', 'Главная'],
  ['nav_services', 'Услуги'],
  ['nav_works', 'Как это работает'],
  ['nav_reviews', 'Отзывы клиентов'],
  ['nav_contact', 'Контакты'],
  ['nav_order', 'заказать'],

  ['hero_badge', 'Премиум сервис'],
  ['hero_title', 'Профессиональная чистка ковров у вашего дома'],
  ['hero_desc', 'Мы забираем ваши ковры, глубоко очищаем их с помощью профессионального оборудования и доставляем обратно чистыми и как новые.'],
  ['hero_btn_order', 'Заказать'],
  ['hero_btn_call', 'Позвонить'],

  ['services_title', 'Комплексный уход'],
  ['services_desc', 'Решения, адаптированные под каждый тип ткани и потребности в чистке.'],

  ['service_wash_title', 'Мойка ковров'],
  ['service_wash_desc', 'Современный промышленный процесс мойки, который глубоко проникает в волокна и удаляет грязь, накопившуюся за годы.'],

  ['service_deep_title', 'Глубокая чистка ковров'],
  ['service_deep_desc', 'Специальный метод паровой чистки для деликатных ковров, которым требуется более тщательный уход, чем обычная мойка.'],
  ['service_deep_note', 'Включено для всех ковров'],

  ['service_stain_title', 'Удаление пятен'],
  ['service_stain_desc', 'Специальные химические методы чистки для удаления пятен от вина, чернил и кофе.'],

  ['service_dust_title', 'Удаление пыли и запахов'],
  ['service_dust_desc', 'Глубоко устраняем запахи домашних животных и аллергены, обеспечивая здоровую атмосферу в доме.'],

  ['service_delivery_title', 'Забор и доставка'],
  ['service_delivery_desc', 'Тяжёлую работу берём на себя. Услуга от двери до двери — без дополнительной платы.'],

  ['works_title', 'Простой процесс в 4 шага'],

  ['step1_title', 'Позвоните'],
  ['step1_desc', 'Согласуйте с нашей командой удобное время для забора ковра.'],

  ['step2_title', 'Забор'],
  ['step2_desc', 'Мы забираем ваши ковры прямо от двери вашего дома.'],

  ['step3_title', 'Мойка'],
  ['step3_desc', 'Глубокая промышленная чистка выполняется в нашей специально оборудованной мастерской.'],

  ['step4_title', 'Доставка'],
  ['step4_desc', 'Мы возвращаем ваши ковры чистыми, сухими и как новые.'],

  ['before_label', 'До'],
  ['after_label', 'После'],

  ['adv_title', 'Преимущество AslSifat'],

  ['adv_equipment_title', 'Профессиональное оборудование'],
  ['adv_equipment_desc', 'Промышленные экстракторы и сушильное оборудование для высокого результата.'],

  ['adv_safe_title', 'Безопасные средства'],
  ['adv_safe_desc', 'Гипоаллергенные и безопасные для домашних животных чистящие средства.'],

  ['adv_fast_title', 'Быстрый сервис'],
  ['adv_fast_desc', 'Стандартная чистка и доставка выполняются в течение 48–72 часов.'],

  ['adv_staff_title', 'Опытные специалисты'],
  ['adv_staff_desc', 'Квалифицированные специалисты, хорошо понимающие разные виды волокон и материалов.'],

  ['reviews_title', 'Что говорят наши клиенты'],
  ['review1_text', '“Сервис просто отличный. Моему персидскому ковру 10 лет, и он стал как новый. Процесс забора и возврата был очень удобным и без проблем.”'],
  ['review1_name', 'Равшан С.'],
  ['review1_role', 'Владелец дома'],

  ['review2_text', '“Это лучшая чистка ковров, которой я пользовалась. Они смогли удалить даже те пятна, с которыми не справились другие компании.”'],
  ['review2_name', 'Гульмира Т.'],
  ['review2_role', 'Владелец дома'],

  ['review3_text', '“Быстрый, профессиональный и очень достойный сервис за свою цену. Ковры стали приятно пахнуть и стали очень мягкими. Однозначно рекомендую!”'],
  ['review3_name', 'Дилноза К.'],
  ['review3_role', 'Владелец бизнеса'],

  ['cta_title', 'Подарите своим коврам новую жизнь'],
  ['cta_desc', 'Почувствуйте разницу профессионального сервиса. Закажите услугу забора ковров уже сегодня.'],
  ['cta_btn_order', 'Заказать'],
  ['cta_btn_call', 'Позвонить'],

  ['contact_title', 'Свяжемся'],
  ['contact_address_title', 'Адрес'],
  ['contact_address_desc', 'Ташкентская область, Зангиатинский район, МФИ Рамадан махалляси'],
  ['contact_time_title', 'Время работы'],
  ['contact_time_desc', '24/7'],
  ['contact_social_title', 'Контакты и соцсети'],
  ['contact_instagram', 'Instagram @aslsifat_clean'],

  ['form_name_label', 'Имя'],
  ['form_phone_label', 'Номер телефона'],
  ['form_size_label', 'Размер ковра / Детали'],
  ['form_message_label', 'Сообщение'],

  ['opt_default', 'Выберите тип размера'],
  ['opt_small', 'Маленький (до 4 м²)'],
  ['opt_medium', 'Средний (4–10 м²)'],
  ['opt_large', 'Большой (более 10 м²)'],

  ['form_submit', 'Отправить заявку'],

  ['footer_brand', 'AslSifat Clean'],
  ['footer_contact', 'Контактная информация'],
  ['footer_hours', 'Время работы'],
  ['footer_social', 'Соцсети'],
  ['footer_copy', '© 2026 AslSifat Clean. All rights reserved.'],
  ['footer_privacy', 'Политика конфиденциальности'],
  ['footer_terms', 'Условия использования']
]);

function langChange(slctMap) {
  slctMap.forEach((text, id) => {
    const element = document.getElementById(id);
    if (element) {
      element.innerText = text;
    } else {
      console.warn(`ID "${id}" not found in HTML`);
    }
  });
}

// Make them global
window.langChange = langChange;
window.uz = uz;
window.ru = ru;


window.langChange = langChange;
window.uz = uz;
window.ru = ru;

// const uz = new Map([
//   ['nav_home', 'Bosh sahifa'],
//   ['nav_services', 'Xizmatlar']
// ]);

// const ru = new Map([
//   ['nav_home', 'asd ajsd'],
//   ['nav_services', 'aks']
// ]);




// function langChange(selectedMap) {

//   selectedMap.forEach((text, id) => {
//     document.getElementById(id).innerText = text;
//   });

// }