// Enums doesn't exist in JS but for most of other languages
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED

const isDelivered = (status: OrderStatus) => {
  return status === OrderStatus.DELIVERED
}

isDelivered(OrderStatus.PENDING)

enum ArrowKeys {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}
