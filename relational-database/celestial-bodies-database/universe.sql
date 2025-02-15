--
-- PostgreSQL database dump
--

-- Dumped from database version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)
-- Dumped by pg_dump version 12.17 (Ubuntu 12.17-1.pgdg22.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE universe;
--
-- Name: universe; Type: DATABASE; Schema: -; Owner: freecodecamp
--

CREATE DATABASE universe WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE universe OWNER TO freecodecamp;

\connect universe

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: galaxy; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.galaxy (
    galaxy_id integer NOT NULL,
    name character varying(40) NOT NULL,
    age_in_millions_of_years numeric(9,2),
    shape character varying(30),
    size numeric(9,2)
);


ALTER TABLE public.galaxy OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.galaxy_galaxy_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.galaxy_galaxy_id_seq OWNER TO freecodecamp;

--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.galaxy_galaxy_id_seq OWNED BY public.galaxy.galaxy_id;


--
-- Name: moon; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.moon (
    moon_id integer NOT NULL,
    name character varying(40) NOT NULL,
    is_spherical boolean,
    planet_id integer,
    size numeric(9,2)
);


ALTER TABLE public.moon OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.moon_moon_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.moon_moon_id_seq OWNER TO freecodecamp;

--
-- Name: moon_moon_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.moon_moon_id_seq OWNED BY public.moon.moon_id;


--
-- Name: planet; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet (
    planet_id integer NOT NULL,
    name character varying(40) NOT NULL,
    description text,
    has_life boolean,
    star_id integer,
    day_duration_in_hours integer,
    year_duration_in_days integer
);


ALTER TABLE public.planet OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_planet_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_planet_id_seq OWNER TO freecodecamp;

--
-- Name: planet_planet_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_planet_id_seq OWNED BY public.planet.planet_id;


--
-- Name: planet_type; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.planet_type (
    planet_type_id integer NOT NULL,
    name character varying(30) NOT NULL,
    has_water boolean
);


ALTER TABLE public.planet_type OWNER TO freecodecamp;

--
-- Name: planet_type_planet_type_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.planet_type_planet_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.planet_type_planet_type_id_seq OWNER TO freecodecamp;

--
-- Name: planet_type_planet_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.planet_type_planet_type_id_seq OWNED BY public.planet_type.planet_type_id;


--
-- Name: star; Type: TABLE; Schema: public; Owner: freecodecamp
--

CREATE TABLE public.star (
    star_id integer NOT NULL,
    name character varying(40) NOT NULL,
    galaxy_id integer,
    size numeric(9,2),
    age_in_millions_of_years character varying(30)
);


ALTER TABLE public.star OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE; Schema: public; Owner: freecodecamp
--

CREATE SEQUENCE public.star_star_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.star_star_id_seq OWNER TO freecodecamp;

--
-- Name: star_star_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: freecodecamp
--

ALTER SEQUENCE public.star_star_id_seq OWNED BY public.star.star_id;


--
-- Name: galaxy galaxy_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy ALTER COLUMN galaxy_id SET DEFAULT nextval('public.galaxy_galaxy_id_seq'::regclass);


--
-- Name: moon moon_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon ALTER COLUMN moon_id SET DEFAULT nextval('public.moon_moon_id_seq'::regclass);


--
-- Name: planet planet_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet ALTER COLUMN planet_id SET DEFAULT nextval('public.planet_planet_id_seq'::regclass);


--
-- Name: planet_type planet_type_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet_type ALTER COLUMN planet_type_id SET DEFAULT nextval('public.planet_type_planet_type_id_seq'::regclass);


--
-- Name: star star_id; Type: DEFAULT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star ALTER COLUMN star_id SET DEFAULT nextval('public.star_star_id_seq'::regclass);


--
-- Data for Name: galaxy; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.galaxy VALUES (1, 'milky way', 9999999.99, 'spiral', 9999999.99);
INSERT INTO public.galaxy VALUES (2, 'andromeda galaxy', 8888888.88, 'spiral', 8888888.88);
INSERT INTO public.galaxy VALUES (3, 'large magellanic cloud', 7777777.77, 'ring', 7777777.77);
INSERT INTO public.galaxy VALUES (4, 'small magellanic cloud', 6666666.66, 'spiral', 6666666.66);
INSERT INTO public.galaxy VALUES (5, 'triangulum galaxy', 5555555.55, 'elongated elliptical', 5555555.55);
INSERT INTO public.galaxy VALUES (6, 'Whirlpool Galaxy', 4444444.44, 'elliptical', 4444444.44);


--
-- Data for Name: moon; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.moon VALUES (1, 'moon', true, 1, 9999999.99);
INSERT INTO public.moon VALUES (2, 'phobos', true, 9, 8888888.88);
INSERT INTO public.moon VALUES (3, 'europa', true, 10, 7777777.77);
INSERT INTO public.moon VALUES (4, 'titan', true, 11, 6666666.66);
INSERT INTO public.moon VALUES (5, 'titania', true, 12, 4444888.33);
INSERT INTO public.moon VALUES (6, 'oberon', false, 12, 4444888.33);
INSERT INTO public.moon VALUES (7, 'umbriel', false, 12, 4444888.33);
INSERT INTO public.moon VALUES (8, 'ariel', true, 12, 4444888.33);
INSERT INTO public.moon VALUES (9, 'miranda', true, 12, 4444888.33);
INSERT INTO public.moon VALUES (10, 'triton', false, 13, 8888888.88);
INSERT INTO public.moon VALUES (11, 'proteus', false, 13, 8888888.88);
INSERT INTO public.moon VALUES (12, 'Enceladus', true, 11, 2222222.88);
INSERT INTO public.moon VALUES (13, 'Rhea', false, 11, 2222222.88);
INSERT INTO public.moon VALUES (14, 'Iapetus', false, 11, 2222222.88);
INSERT INTO public.moon VALUES (15, 'Deimos', false, 9, 2229999.88);
INSERT INTO public.moon VALUES (16, 'Io', false, 10, 7777755.88);
INSERT INTO public.moon VALUES (17, 'Ganymede', true, 10, 7777755.88);
INSERT INTO public.moon VALUES (18, 'Callisto', false, 10, 7777755.88);
INSERT INTO public.moon VALUES (19, 'Larissa', true, 13, 5555555.66);
INSERT INTO public.moon VALUES (20, 'Despina', false, 13, 5555555.66);


--
-- Data for Name: planet; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet VALUES (1, 'earth', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', true, 1, 24, 365);
INSERT INTO public.planet VALUES (2, 'Corrupti', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.', false, 2, 34, 355);
INSERT INTO public.planet VALUES (3, 'nostrud', 'olor minim nulla est proident. Nostrud', false, 3, 58, 566);
INSERT INTO public.planet VALUES (4, 'voluptate', 'Culpa proident adipisicing id nulla', false, 4, 88, 5466);
INSERT INTO public.planet VALUES (5, 'cupidatat', 'non excepteur duis sunt velit enim.', false, 5, 828, 66);
INSERT INTO public.planet VALUES (6, 'Lorem', 'commodo ex non excepteur duis sunt', false, 6, 28, 166);
INSERT INTO public.planet VALUES (7, 'mercury', 'The smallest and closest planet to the Sun.', false, 1, 58, 88);
INSERT INTO public.planet VALUES (8, 'venus', 'The hottest planet in the Solar System due to a thick atmosphere of carbon dioxide.', false, 1, 243, 225);
INSERT INTO public.planet VALUES (9, 'mars', 'Known as the "Red Planet" due to iron oxide (rust) on its surface.', false, 1, 24, 687);
INSERT INTO public.planet VALUES (10, 'jupiter', 'The largest planet in the Solar System.', false, 1, 9, 11);
INSERT INTO public.planet VALUES (11, 'saturn', 'Known for its stunning ring system made of ice and rock.', false, 1, 10, 29);
INSERT INTO public.planet VALUES (12, 'uranus', 'Rotates on its side, likely due to a massive collision in the past.', false, 1, 17, 84);
INSERT INTO public.planet VALUES (13, 'neptune', 'The farthest planet from the Sun.', false, 1, 16, 164);


--
-- Data for Name: planet_type; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.planet_type VALUES (1, 'lorem', true);
INSERT INTO public.planet_type VALUES (2, 'ipsum', false);
INSERT INTO public.planet_type VALUES (3, 'consectetur', true);


--
-- Data for Name: star; Type: TABLE DATA; Schema: public; Owner: freecodecamp
--

INSERT INTO public.star VALUES (1, 'sun', 1, 9999999.99, '9999999.99');
INSERT INTO public.star VALUES (2, 'mu andromedae', 2, 8888888.88, '8888888.88');
INSERT INTO public.star VALUES (3, 'R136a1', 3, 7777777.77, '7777777.77');
INSERT INTO public.star VALUES (4, 'NGC 346 Stars', 4, 6666666.66, '6666666.66');
INSERT INTO public.star VALUES (5, 'Var 83', 5, 5555555.55, '5555555.55');
INSERT INTO public.star VALUES (6, 'NGC 5194 X-1', 6, 4444444.44, '4444444.44');


--
-- Name: galaxy_galaxy_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.galaxy_galaxy_id_seq', 6, true);


--
-- Name: moon_moon_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.moon_moon_id_seq', 20, true);


--
-- Name: planet_planet_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_planet_id_seq', 13, true);


--
-- Name: planet_type_planet_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.planet_type_planet_type_id_seq', 3, true);


--
-- Name: star_star_id_seq; Type: SEQUENCE SET; Schema: public; Owner: freecodecamp
--

SELECT pg_catalog.setval('public.star_star_id_seq', 6, true);


--
-- Name: galaxy galaxy_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_name_key UNIQUE (name);


--
-- Name: galaxy galaxy_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.galaxy
    ADD CONSTRAINT galaxy_pkey PRIMARY KEY (galaxy_id);


--
-- Name: moon moon_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_name_key UNIQUE (name);


--
-- Name: moon moon_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT moon_pkey PRIMARY KEY (moon_id);


--
-- Name: planet planet_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_name_key UNIQUE (name);


--
-- Name: planet planet_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT planet_pkey PRIMARY KEY (planet_id);


--
-- Name: planet_type planet_type_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet_type
    ADD CONSTRAINT planet_type_name_key UNIQUE (name);


--
-- Name: planet_type planet_type_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet_type
    ADD CONSTRAINT planet_type_pkey PRIMARY KEY (planet_type_id);


--
-- Name: star star_name_key; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_name_key UNIQUE (name);


--
-- Name: star star_pkey; Type: CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT star_pkey PRIMARY KEY (star_id);


--
-- Name: star fk_galaxy; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.star
    ADD CONSTRAINT fk_galaxy FOREIGN KEY (galaxy_id) REFERENCES public.galaxy(galaxy_id);


--
-- Name: moon fk_planet; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.moon
    ADD CONSTRAINT fk_planet FOREIGN KEY (planet_id) REFERENCES public.planet(planet_id);


--
-- Name: planet fk_star; Type: FK CONSTRAINT; Schema: public; Owner: freecodecamp
--

ALTER TABLE ONLY public.planet
    ADD CONSTRAINT fk_star FOREIGN KEY (star_id) REFERENCES public.star(star_id);


--
-- PostgreSQL database dump complete
--
