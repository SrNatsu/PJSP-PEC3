/**
 * Exercise 1: Using callbacks
 */
function processOrders(orders, callback) {
  if (orders) {
    let statusObject = {};
    for (const order of orders) {
      if (
        typeof order === "object" &&
        order.id &&
        typeof order.id === "number" &&
        order.status &&
        typeof order.status === "string"
      ) {
        if (!statusObject[order.status]) {
          statusObject[order.status] = [order.id];
        } else {
          statusObject[order.status].push(order.id);
        }
      } else {
        return callback(null, "Invalid orders input");
      }
    }
    return callback(statusObject, null);
  } else {
    return callback(null, "Invalid orders input");
  }
}

/**
 * Exercise 2: Asynchronous management using simple promises
 */
function fetchProductStock(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof productId === "number") {
        if (0 < productId && productId <= 5000) {
          const result = {
            productId: productId,
            stock: Math.floor(Math.random() * 101),
          };
          resolve(result);
        } else {
          return reject(new Error("Product id is out of valid range"));
        }
      } else {
        return reject(new Error("Invalid product id"));
      }
    });
  });
}

/**
 * Exercise 3: Promise chaining
 */
function getOrderDetails(fetchUserId, fetchOrders, fetchOrderDetails) {
  return fetchUserId()
    .then((userId) => {
      return fetchOrders(userId);
    })
    .then((orders) => {
      return fetchOrderDetails(orders);
    })
    .catch((error) => {
      return Promise.reject(new Error(`Error: ${error.message}`));
    });
}

/**
 * Exercise 4: Using async/await
 */
async function fetchAsyncData(asyncCallback) {
  let result = null;

  try {
    result = await asyncCallback();
    return { status: "success", data: result };
  } catch (error) {
    return { status: "error", message: error.message };
  }
}

/**
 * Exercise 5: Processing multiple promises using async/await
 */
async function processPendingOrders(fetchPendingOrders, processOrder) {
  try {
    let pendingOrders = await fetchPendingOrders();
    let processedOrders = [];

    for (let order of pendingOrders) {
      try {
        let processedOrder = await processOrder(order);
        processedOrders.push(processedOrder);
      } catch (error) {
        throw new Error(`Error in order ${order}: ${error.message}`);
      }
    }

    return processedOrders;
  } catch (error) {
    throw new Error(error.message);
  }
}

/**
 * Exercise 6: Refactoring with async/await
 */
async function getOrderDetailsAsync(
  fetchUserId,
  fetchOrders,
  fetchOrderDetails,
) {
  try {
    let userId = await fetchUserId();
    let orders = await fetchOrders(userId);
    let result = await fetchOrderDetails(orders);

    return result;
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

/**
 * Exercise 7: Background processes
 */
function createShippingManager(fetchNextBatch, shipOrder) {
  let run = false;
  let timeoutId = null;
  const statusList = [];

  async function nextCycle() {
    try {
      const batch = await fetchNextBatch();
      if (batch === null) {
        run = false;
        return;
      }

      for (const order of batch) {
        const orderStatus = {
          orderId: order.id,
          status: "pending",
          result: null,
          error: null,
        };

        statusList.push(orderStatus);

        try {
          orderStatus.status = "shipping";
          const result = await shipOrder(order);
          orderStatus.status = "shipped";
          orderStatus.result = result;
        } catch (error) {
          orderStatus.status = "failed";
          orderStatus.error = error.message;
        }
      }
    } catch (e) {}

    if (run) {
      timeoutId = setTimeout(nextCycle, 200);
    }
  }

  return {
    start() {
      if (!run) {
        run = true;
        nextCycle();
      }
    },

    stop() {
      run = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    },

    getStatus() {
      return statusList;
    },
  };
}

// Export functions for testing
export {
  processOrders,
  fetchProductStock,
  getOrderDetails,
  fetchAsyncData,
  processPendingOrders,
  getOrderDetailsAsync,
  createShippingManager,
};
