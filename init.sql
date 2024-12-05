DROP TABLE IF EXISTS sale_items;

CREATE TABLE sale_items (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(100),
    price DECIMAL(10, 2),
    quantity INT
);

INSERT INTO sale_items (item_name, price, quantity) VALUES
('Item A', 19.99, 10),
('Item B', 29.99, 5);
