import {
    processOrders,
    fetchProductStock,
    getOrderDetails,
    fetchAsyncData,
    processPendingOrders,
    getOrderDetailsAsync,
    createShippingManager
} from './pec3';

// Jest setup verify
describe("jest", () => {
    test("should work", () => {
        expect(true).toBeTruthy();
    });
});

// Exercise 1
describe("Exercise 1", () => {
    test("should group orders by status correctly", () => {
        // Test data
        const orders = [
            { id: 101, status: 'pending' },
            { id: 102, status: 'shipped' },
            { id: 103, status: 'delivered' },
            { id: 104, status: 'pending' },
            { id: 105, status: 'shipped' },
        ];

        // Expected result
        const expectedResult = {
            pending: [101, 104],
            shipped: [102, 105],
            delivered: [103],
        };

        const callback = jest.fn((result, error) => {
            expect(error).toBeNull();
            expect(result).toEqual(expectedResult);
        });

        // Call the function with the mock callback
        processOrders(orders, callback);
        // Verify that the callback was called
        expect(callback).toHaveBeenCalled();
    });

    test("should return error for invalid input", () => {
        // Test with null instead of an array
        processOrders(null, (result, error) => {
            expect(result).toBeNull();
            expect(error).toBe("Invalid orders input");
        });

        // Test with invalid order objects
        const invalidOrders = [
            { id: '101', status: 'pending' }, // id should be a number
            { id: 102, status: 123 } // status should be a string
        ];

        const callback = jest.fn((result, error) => {
            expect(result).toBeNull();
            expect(error).toBe("Invalid orders input");
        });

        // Call the function with the mock callback
        processOrders(invalidOrders, callback);
        // Verify that the callback was called
        expect(callback).toHaveBeenCalled();
    });
});

// Exercise 2
describe("Exercise 2", () => {
    test("should return product stock for valid productId", async () => {
        const result = await fetchProductStock(1234);
        expect(result).toHaveProperty('productId', 1234);
        expect(result).toHaveProperty('stock');
        expect(typeof result.stock).toBe('number');
        expect(result.stock).toBeGreaterThanOrEqual(0);
        expect(result.stock).toBeLessThanOrEqual(100);
    });

    test("should reject with error for invalid productId type", async () => {
        await expect(fetchProductStock('abc')).rejects.toThrow('Invalid product id');
    });

    test("should reject with error for out of range productId", async () => {
        await expect(fetchProductStock(0)).rejects.toThrow('Product id is out of valid range');
        await expect(fetchProductStock(5001)).rejects.toThrow('Product id is out of valid range');
    });
});

// Exercise 3
describe("Exercise 3", () => {
    test('should return a promise', () => {
        const resolveFn = () => Promise.resolve();
        const result = getOrderDetails(resolveFn, resolveFn, resolveFn);

        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(Promise);
    });

    test("should chain promises and return order details", async () => {
        const fetchUserId = jest.fn().mockResolvedValue(123);
        const fetchOrders = jest.fn().mockResolvedValue([101, 102, 103]);
        const fetchOrderDetails = jest.fn().mockResolvedValue([
            { id: 101, details: "Product A" },
            { id: 102, details: "Product B" },
            { id: 103, details: "Product C" }
        ]);

        const result = await getOrderDetails(fetchUserId, fetchOrders, fetchOrderDetails);

        expect(fetchUserId).toHaveBeenCalled();
        expect(fetchOrders).toHaveBeenCalledWith(123);
        expect(fetchOrderDetails).toHaveBeenCalledWith([101, 102, 103]);
        expect(result).toEqual([
            { id: 101, details: "Product A" },
            { id: 102, details: "Product B" },
            { id: 103, details: "Product C" }
        ]);
    });

    test("should handle errors in the promise chain", async () => {
        const fetchUserId = jest.fn().mockRejectedValue(new Error("User not found"));
        const fetchOrders = jest.fn();
        const fetchOrderDetails = jest.fn();

        await expect(getOrderDetails(fetchUserId, fetchOrders, fetchOrderDetails))
            .rejects.toThrow("Error: User not found");

        expect(fetchUserId).toHaveBeenCalled();
        expect(fetchOrders).not.toHaveBeenCalled();
        expect(fetchOrderDetails).not.toHaveBeenCalled();
    });
});

// Exercise 4
describe("Exercise 4", () => {
    test("should return success status and data when promise resolves", async () => {
        const mockData = { orderIds: [101, 102] };
        const asyncCallback = jest.fn().mockResolvedValue(mockData);

        const result = await fetchAsyncData(asyncCallback);

        expect(asyncCallback).toHaveBeenCalled();
        expect(result).toEqual({
            status: "success",
            data: mockData
        });
    });

    test("should return error status and message when promise rejects", async () => {
        const errorMessage = "Service unavailable";
        const asyncCallback = jest.fn().mockRejectedValue(new Error(errorMessage));

        const result = await fetchAsyncData(asyncCallback);

        expect(asyncCallback).toHaveBeenCalled();
        expect(result).toEqual({
            status: "error",
            message: errorMessage
        });
    });
});

// Exercise 5
describe("Exercise 5", () => {
    test("should return a Promise that resolves to an Array", async () => {
        // Setup mock functions
        const orderIds = [101, 102, 103];
        const fetchPendingOrders = jest.fn().mockResolvedValue(orderIds);
        const processOrder = jest.fn().mockImplementation(async (orderId) => {
            return { orderId, status: 'processed' };
        });

        // Call the function
        const result = processPendingOrders(fetchPendingOrders, processOrder);
        
        // Check that it returns a Promise
        expect(result).toBeInstanceOf(Promise);
        
        // Resolve the promise and check the result is an Array
        const resolvedValue = await result;
        expect(Array.isArray(resolvedValue)).toBe(true);
        expect(resolvedValue.length).toBe(3);
    });

    test("should process all orders successfully", async () => {
        const orderIds = [101, 102, 103];
        const fetchPendingOrders = jest.fn().mockResolvedValue(orderIds);
        const processOrder = jest.fn().mockImplementation(async (orderId) => {
            return { orderId, status: 'processed' };
        });

        const results = await processPendingOrders(fetchPendingOrders, processOrder);

        expect(fetchPendingOrders).toHaveBeenCalled();
        expect(processOrder).toHaveBeenCalledTimes(3);
        orderIds.forEach((id, index) => {
            expect(processOrder).toHaveBeenNthCalledWith(index + 1, id);
        });
        expect(results).toEqual([
            { orderId: 101, status: 'processed' },
            { orderId: 102, status: 'processed' },
            { orderId: 103, status: 'processed' }
        ]);
    });

    test("should throw error when one processing order fails", async () => {
        const orderIds = [101, 102, 103];
        const fetchPendingOrders = jest.fn().mockResolvedValue(orderIds);
        const processOrder = jest.fn().mockImplementation(async (orderId) => {
            if (orderId === 102) {
                throw new Error('Payment declined');
            }
            return { orderId, status: 'processed' };
        });

        await expect(processPendingOrders(fetchPendingOrders, processOrder))
            .rejects.toThrow('Error in order 102: Payment declined');

        expect(fetchPendingOrders).toHaveBeenCalled();
        expect(processOrder).toHaveBeenCalledWith(101);
        expect(processOrder).toHaveBeenCalledWith(102);
        expect(processOrder).not.toHaveBeenCalledWith(103);
    });

    test("should throw error when fetchPendingOrders fails", async () => {
        const fetchPendingOrders = jest.fn().mockRejectedValue(new Error('Database connection failed'));
        const processOrder = jest.fn();

        await expect(processPendingOrders(fetchPendingOrders, processOrder))
            .rejects.toThrow(/Database connection failed/);

        expect(fetchPendingOrders).toHaveBeenCalled();
        expect(processOrder).not.toHaveBeenCalled();
    });
});

// Exercise 6
describe("Exercise 6", () => {
    test('should return a promise', () => {
        const resolveFn = () => Promise.resolve();
        const result = getOrderDetails(resolveFn, resolveFn, resolveFn);

        expect(result).toBeDefined();
        expect(result).toBeInstanceOf(Promise);
    });

    test("should get order details using async/await", async () => {
        const fetchUserId = jest.fn().mockResolvedValue(123);
        const fetchOrders = jest.fn().mockResolvedValue([101, 102, 103]);
        const fetchOrderDetails = jest.fn().mockResolvedValue([
            { id: 101, details: "Product A" },
            { id: 102, details: "Product B" },
            { id: 103, details: "Product C" }
        ]);

        const result = await getOrderDetailsAsync(fetchUserId, fetchOrders, fetchOrderDetails);

        expect(fetchUserId).toHaveBeenCalled();
        expect(fetchOrders).toHaveBeenCalledWith(123);
        expect(fetchOrderDetails).toHaveBeenCalledWith([101, 102, 103]);
        expect(result).toEqual([
            { id: 101, details: "Product A" },
            { id: 102, details: "Product B" },
            { id: 103, details: "Product C" }
        ]);
    });

    test("should handle errors correctly with async/await", async () => {
        const fetchUserId = jest.fn().mockRejectedValue(new Error("User not found"));
        const fetchOrders = jest.fn();
        const fetchOrderDetails = jest.fn();

        await expect(getOrderDetailsAsync(fetchUserId, fetchOrders, fetchOrderDetails))
            .rejects.toThrow("Error: User not found");

        expect(fetchUserId).toHaveBeenCalled();
        expect(fetchOrders).not.toHaveBeenCalled();
        expect(fetchOrderDetails).not.toHaveBeenCalled();
    });
});

// Exercise 7
describe("Exercise 7", () => {
    const flushPromises = () => new Promise(res => process.nextTick(res))

    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test("should process batches of orders", async () => {
        const fetchNextBatch = jest.fn()
            .mockResolvedValueOnce([{ id: 101 }, { id: 102 }])
            .mockResolvedValueOnce(null);

        const shipOrder = jest.fn().mockImplementation(async (order) => {
            if (order.id === 102) throw new Error('Shipping label error');
            return { orderId: order.id, status: 'success' };
        });

        const manager = createShippingManager(fetchNextBatch, shipOrder);
        manager.start();

        // Advance time to process the first batch
        jest.advanceTimersByTime(200);
        // Advance time to process the second batch
        jest.advanceTimersByTime(200);
        // Wait for promises to resolve
        await flushPromises();

        const status = manager.getStatus();

        expect(shipOrder).toHaveBeenCalledTimes(2);
        expect(status).toHaveLength(2);

        expect(status[0]).toEqual(expect.objectContaining({
            orderId: 101,
            status: 'shipped',
            result: { orderId: 101, status: 'success' },
            error: null
        }));

        expect(status[1]).toEqual(expect.objectContaining({
            orderId: 102,
            status: 'failed',
            result: null,
            error: 'Shipping label error'
        }));
    });

    test("should stop processing when stop() is called", async () => {
        const fetchNextBatch = jest.fn().mockResolvedValue([{ id: 101 }]);
        const shipOrder = jest.fn().mockResolvedValue({ status: 'success' });
        const manager = createShippingManager(fetchNextBatch, shipOrder);

        // Start processing
        manager.start();
        // Advance time to process the first batch
        jest.advanceTimersByTime(200);
        // Stop processing
        manager.stop();
        // Advance more time, but no more calls should be made
        jest.advanceTimersByTime(1000);
        // Wait for promises to resolve
        await flushPromises();

        expect(fetchNextBatch).toHaveBeenCalledTimes(1);
        expect(shipOrder).toHaveBeenCalledTimes(1);
        expect(manager.getStatus()).toHaveLength(1);
    });
});