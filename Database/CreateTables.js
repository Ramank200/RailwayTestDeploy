import db from "./db";
const query = `-- ========================
-- Table: adishilp_address
-- ========================
CREATE TABLE adishilp_address (
    id SERIAL PRIMARY KEY,
    address_line_1 VARCHAR(900) NOT NULL,
    address_line_2 VARCHAR(900),
    city VARCHAR(200) NOT NULL,
    landmark VARCHAR(500),
    postal_code VARCHAR(20),
    is_default BOOLEAN DEFAULT FALSE
);

-- ========================
-- Table: adishilp_product
-- ========================
CREATE TABLE adishilp_product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    description VARCHAR(2000),
    base_price DOUBLE PRECISION NOT NULL,
    is_global BOOLEAN DEFAULT FALSE
    -- relationships (images, inventory, dimensions, reviews handled separately)
);

-- ========================
-- Table: adishilp_media (Product Images)
-- ========================
CREATE TABLE adishilp_media (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES adishilp_product(id) ON DELETE SET NULL,
    image_url VARCHAR(400),
    alt_text VARCHAR(400),
    is_primary BOOLEAN DEFAULT FALSE
);

-- ========================
-- Table: adishilp_product_inventory
-- ========================
CREATE TABLE adishilp_product_inventory (
    id SERIAL PRIMARY KEY,
    product_id INT UNIQUE REFERENCES adishilp_product(id) ON DELETE SET NULL,
    is_available BOOLEAN DEFAULT TRUE,
    availability_region_id VARCHAR(200),
    total_quantity DOUBLE PRECISION NOT NULL CHECK (total_quantity >= 0),
    discount_percentage INT DEFAULT 0 CHECK (discount_percentage BETWEEN 0 AND 100),
    discount_expiration_date VARCHAR(90)
);

-- ========================
-- Table: adishilp_product_dimensions
-- ========================
CREATE TABLE adishilp_product_dimensions (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES adishilp_product(id) ON DELETE SET NULL,
    height INT NOT NULL CHECK (height >= 0),
    width DOUBLE PRECISION CHECK (width >= 0),
    depth DOUBLE PRECISION CHECK (depth >= 0),
    qantity_of_product INT CHECK (qantity_of_product >= 0),
    price_of_product DOUBLE PRECISION NOT NULL CHECK (price_of_product >= 0)
);

-- ========================
-- Table: product_reviews
-- ========================
CREATE TABLE product_reviews (
    id SERIAL PRIMARY KEY,
    product_id INT REFERENCES adishilp_product(id) ON DELETE CASCADE,
    review_text VARCHAR(450),
    star_rating DOUBLE PRECISION,
    user_name VARCHAR(200),
    date_of_review VARCHAR(90)
);

-- ========================
-- Table: adishilp_cart
-- ========================
CREATE TABLE adishilp_cart (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(90) NOT NULL
);

-- Link cart -> products (one cart can have many products)
CREATE TABLE adishilp_cart_products (
    id SERIAL PRIMARY KEY,
    cart_id INT REFERENCES adishilp_cart(id) ON DELETE CASCADE,
    product_id INT REFERENCES adishilp_product(id) ON DELETE SET NULL
);

-- ========================
-- Table: adishilp_wishlist
-- ========================
CREATE TABLE adishilp_wishlist (
    id SERIAL PRIMARY KEY,
    wishlist_name VARCHAR(199),
    user_id VARCHAR(58)
);

-- ========================
-- Table: adishilp_order
-- ========================
CREATE TABLE adishilp_order (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(88),
    region_id VARCHAR(90),
    amount_of_order DOUBLE PRECISION NOT NULL,
    shipping_amount DOUBLE PRECISION,
    shipping_date VARCHAR(100),
    shipping_status VARCHAR(90),
    is_amount_paid VARCHAR(200),
    
    adishilp_address_id INT REFERENCES adishilp_address(id) ON DELETE SET NULL,
    billing_address_id INT REFERENCES adishilp_address(id) ON DELETE SET NULL,
    ordered_product_id INT REFERENCES adishilp_product(id) ON DELETE SET NULL
);

-- ========================
-- Table: adishilp_user
-- ========================
CREATE TABLE adishilp_user (
    id SERIAL PRIMARY KEY,
    user_id VARCHAR(50) NOT NULL,
    firstname VARCHAR(90),
    lastname VARCHAR(40),
    is_active BOOLEAN DEFAULT TRUE,
    region VARCHAR(20),
    cart_id INT UNIQUE REFERENCES adishilp_cart(id) ON DELETE CASCADE,
    wishlist_id INT UNIQUE REFERENCES adishilp_wishlist(id) ON DELETE CASCADE
);
`;

const CreateTables = () => {
  db.query(query, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfully created", res);
    }
  });
};

export default CreateTables;
