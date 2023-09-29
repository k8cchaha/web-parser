console.log("Hello Alex")

const cardListElem = $('.m-order-card')
console.log(cardListElem.length)
const orderList = []

cardListElem.each(function(i, elem) {
  const obj = {}
  obj.orderInfo = []
  obj.cardList = []
  
  // order info
  const order = $(elem).find('.primary__item--item-text')
  order.each(function(j, orderElem) {
    obj.orderInfo.push(orderElem.textContent)
  })
  
  // cards info
  const cards = $(elem).find('.m-item-card.m-container-item-layout-row__body')
  cards.each(function(j, cardElem) {
    const cardObj = {}
    cardObj.img = $($(cardElem).find('.m-image img')[0]).attr('src')
    cardObj.title = $(cardElem).find('.container-item-col__info-item-info-title a')[0].textContent
    cardObj.url = $($(cardElem).find('.container-item-col__info-item-info-title a')[0]).attr('href')
    cardObj.price = $(cardElem).find('.container-item-col__info-item-info-additionalPrice span')[0].textContent
    cardObj.seller = $(cardElem).find('.container-item-col__info-item-info-sellerInfo span.PSEUDOLINK')[0].firstChild.textContent
    obj.cardList.push(cardObj)
  })
  orderList.push(obj)
})

const tableList = []

for (let i = 0; i < orderList.length; i++) {
  for (let j = 0; j < orderList[i].cardList.length; j++) {
    const orderArray = orderList[i].orderInfo[0].split(':')
    const obj = { ...orderList[i].cardList[j], order: orderArray.join('<br>'), date: orderList[i].orderInfo[2] }
    tableList.push(obj)
  }
}

console.log(tableList)

new DataTable('#card-table', {
  paging: false,
  data: tableList,
  columns: [
    {
      data: 'order'
    }, {
      data: 'date'
    }, {
      data: 'img',
      render: function (data, type) {
        return '<img src="' + data + '">'        
      }
    }, {
      data: 'title'
    }, {
      data: 'seller'
    }, {
      data: 'price'
    }
  ]
});
