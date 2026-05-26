-- Task 5(Seller with atleast one failed order.)

SELECT DISTINCT seller_id
FROM orders
WHERE status = 'failed'
AND created_at >= CURRENT_DATE - INTERVAL 30 DAY;    --Failed order in the last 30 days

-- Task 6(This month top 5 sellers with highest revenue)

SELECT
    seller_id,
    SUM(amount) AS total_revenue
FROM orders
WHERE status = 'completed'
AND YEAR(created_at) = YEAR(CURRENT_DATE)
AND MONTH(created_at) = MONTH(CURRENT_DATE)
GROUP BY seller_id
ORDER BY total_revenue DESC
LIMIT 5;                              -- Limit of 5 sellers 


-- Task 7 (to find the buyers who have made more than 3 orders but all of them are failed)

SELECT buyer_id
FROM orders
GROUP BY buyer_id
HAVING COUNT(order_id) > 3
AND SUM(
    CASE
        WHEN status = 'completed' THEN 1               
        ELSE 0
    END
) = 0;


-- Task 8 ( For counting number of orders per status in the last 7 days)

SELECT
    status,
    COUNT(*) AS total_orders
FROM orders
WHERE created_at >= CURRENT_DATE - INTERVAL 7 DAY
GROUP BY status
ORDER BY total_orders DESC;                  



