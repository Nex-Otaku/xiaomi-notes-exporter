// const listingCars = getElementByClass('ListingCars');
//
// if (listingCars === null) {
//     alert('На странице не обнаружены карточки объявлений. Запустите поиск');
//
//     return;
// }
//
// if (!hasClass(listingCars, 'ListingCars_outputType_list')) {
//     alert('Выберите тип отображения карточек "Список"');
//
//     return;
// }
//
// const result = [];
// const listItems = getChildrenWithClass(listingCars, 'ListingItem');
// const date = getCurrentDate();
//
// for (const listItem of listItems) {
//     const link = getChildBySelector(listItem, 'a.Link.ListingItemTitle__link');
//
//     if (link === null) {
//         console.warn('List Item without link:', listItem);
//
//         continue;
//     }
//
//     const url = link.getAttribute('href');
//     const title = link.textContent.trim();
//
//     const price = getChildBySelector(listItem, 'div.ListingItemPrice__content')
//         .textContent
//         .replaceAll('\xA0', '') // Неразрывный пробел
//         .replaceAll('₽', '')
//         .trim();
//
//     const year = getChildBySelector(listItem, 'div.ListingItem__year')
//         .textContent
//         .trim();
//
//     const kmAge = getChildBySelector(listItem, 'div.ListingItem__kmAge')
//         .textContent
//         .replaceAll('\xA0', '') // Неразрывный пробел
//         .replaceAll('км', '')
//         .trim();
//
//     const hash = date + ':' + hashCode(url);
//
//     result.push({
//         url: url,
//         date: date,
//         title: title,
//         price: price,
//         year: year,
//         kmAge: kmAge,
//         hash: hash
//     })
// }
