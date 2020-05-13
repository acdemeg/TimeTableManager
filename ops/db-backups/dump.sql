--
-- PostgreSQL database dump
--

-- Dumped from database version 11.6 (Debian 11.6-1.pgdg90+1)
-- Dumped by pg_dump version 11.6 (Debian 11.6-1.pgdg90+1)

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

--
-- Name: enum_Attributes_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Attributes_type" AS ENUM (
    'CREATED',
    'ACCEPTED',
    'CANCELED'
);


ALTER TYPE public."enum_Attributes_type" OWNER TO postgres;

--
-- Name: enum_Attributes_type_attr; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Attributes_type_attr" AS ENUM (
    'AAA',
    'SSS',
    'DDD'
);


ALTER TYPE public."enum_Attributes_type_attr" OWNER TO postgres;

--
-- Name: enum_Notifications_type; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Notifications_type" AS ENUM (
    'ORDER_CREATED',
    'ORDER_ACCEPTED',
    'ORDER_CANCELED',
    'ORDER_DELETED'
);


ALTER TYPE public."enum_Notifications_type" OWNER TO postgres;

--
-- Name: enum_Orders_status; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_Orders_status" AS ENUM (
    'CREATED',
    'ACCEPTED',
    'CANCELED'
);


ALTER TYPE public."enum_Orders_status" OWNER TO postgres;

--
-- Name: enum_TimeTables_slotSize; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public."enum_TimeTables_slotSize" AS ENUM (
    'HOUR',
    'DAY',
    'WEEK'
);


ALTER TYPE public."enum_TimeTables_slotSize" OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: AttributeValues; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."AttributeValues" (
    id integer NOT NULL,
    "timeTableId" integer NOT NULL,
    "attributeId" integer NOT NULL,
    "orderId" integer NOT NULL,
    value character varying(255)
);


ALTER TABLE public."AttributeValues" OWNER TO postgres;

--
-- Name: AttributeValues_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."AttributeValues_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."AttributeValues_id_seq" OWNER TO postgres;

--
-- Name: AttributeValues_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."AttributeValues_id_seq" OWNED BY public."AttributeValues".id;


--
-- Name: Attributes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Attributes" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    type_attr character varying(255) NOT NULL,
    "isRequired" boolean NOT NULL,
    "timeTableId" integer NOT NULL
);


ALTER TABLE public."Attributes" OWNER TO postgres;

--
-- Name: Attributes_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Attributes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Attributes_id_seq" OWNER TO postgres;

--
-- Name: Attributes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Attributes_id_seq" OWNED BY public."Attributes".id;


--
-- Name: Notifications; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Notifications" (
    id integer NOT NULL,
    "orderId" integer NOT NULL,
    "userId" integer NOT NULL,
    type public."enum_Notifications_type" NOT NULL,
    "isRead" boolean NOT NULL
);


ALTER TABLE public."Notifications" OWNER TO postgres;

--
-- Name: Notifications_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Notifications_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Notifications_id_seq" OWNER TO postgres;

--
-- Name: Notifications_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Notifications_id_seq" OWNED BY public."Notifications".id;


--
-- Name: Orders; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Orders" (
    id integer NOT NULL,
    "authorId" integer NOT NULL,
    "startDate" timestamp with time zone NOT NULL,
    "endDate" timestamp with time zone NOT NULL,
    status public."enum_Orders_status" NOT NULL,
    "timeTableId" integer NOT NULL
);


ALTER TABLE public."Orders" OWNER TO postgres;

--
-- Name: Orders_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Orders_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Orders_id_seq" OWNER TO postgres;

--
-- Name: Orders_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Orders_id_seq" OWNED BY public."Orders".id;


--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: TimeTables; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."TimeTables" (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    "startDate" timestamp with time zone NOT NULL,
    "endDate" timestamp with time zone NOT NULL,
    "slotSize" public."enum_TimeTables_slotSize" NOT NULL
);


ALTER TABLE public."TimeTables" OWNER TO postgres;

--
-- Name: TimeTables_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."TimeTables_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."TimeTables_id_seq" OWNER TO postgres;

--
-- Name: TimeTables_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."TimeTables_id_seq" OWNED BY public."TimeTables".id;


--
-- Name: Users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Users" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL
);


ALTER TABLE public."Users" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Users_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Users_id_seq" OWNER TO postgres;

--
-- Name: Users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Users_id_seq" OWNED BY public."Users".id;


--
-- Name: AttributeValues id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."AttributeValues" ALTER COLUMN id SET DEFAULT nextval('public."AttributeValues_id_seq"'::regclass);


--
-- Name: Attributes id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Attributes" ALTER COLUMN id SET DEFAULT nextval('public."Attributes_id_seq"'::regclass);


--
-- Name: Notifications id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notifications" ALTER COLUMN id SET DEFAULT nextval('public."Notifications_id_seq"'::regclass);


--
-- Name: Orders id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders" ALTER COLUMN id SET DEFAULT nextval('public."Orders_id_seq"'::regclass);


--
-- Name: TimeTables id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TimeTables" ALTER COLUMN id SET DEFAULT nextval('public."TimeTables_id_seq"'::regclass);


--
-- Name: Users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users" ALTER COLUMN id SET DEFAULT nextval('public."Users_id_seq"'::regclass);


--
-- Data for Name: AttributeValues; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."AttributeValues" (id, "timeTableId", "attributeId", "orderId", value) FROM stdin;
1	1	1	2	Meeting
2	1	2	2	15
3	1	1	3	JAVA Conference
4	1	1	4	JS Challenge
5	1	2	4	20
\.


--
-- Data for Name: Attributes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Attributes" (id, title, type_attr, "isRequired", "timeTableId") FROM stdin;
1	Name Event	STRING	t	1
2	Count people	NUMBER	f	1
\.


--
-- Data for Name: Notifications; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Notifications" (id, "orderId", "userId", type, "isRead") FROM stdin;
1	2	2	ORDER_CREATED	f
2	2	2	ORDER_CANCELED	f
3	3	2	ORDER_ACCEPTED	f
\.


--
-- Data for Name: Orders; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Orders" (id, "authorId", "startDate", "endDate", status, "timeTableId") FROM stdin;
1	1	2020-04-11 16:00:00+00	2020-04-11 17:00:00+00	CREATED	1
2	2	2020-04-11 16:00:00+00	2020-04-11 17:00:00+00	CREATED	1
3	2	2020-04-11 16:00:00+00	2020-04-11 17:00:00+00	CREATED	1
4	1	2021-04-11 16:00:00+00	2021-04-11 17:00:00+00	CREATED	1
\.


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20200413112409-create-user.js
20200413163834-create-time-table.js
20200413165926-create-order.js
20200414155725-create-notification.js
20200511085944-create-attribute.js
20200511115126-create-attribute-value.js
\.


--
-- Data for Name: TimeTables; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."TimeTables" (id, title, "startDate", "endDate", "slotSize") FROM stdin;
2	Skolkovo Junior Challenge 2020	2020-02-19 18:00:00+00	2020-02-25 17:00:00+00	HOUR
3	Moscow JS Meetup	2020-04-16 18:00:00+00	2020-04-21 17:00:00+00	HOUR
4	ISDEF Spring 2020	2020-06-07 18:00:00+00	2020-06-28 17:00:00+00	DAY
5	HackTheRealty	2020-07-05 18:00:00+00	2020-08-16 17:00:00+00	DAY
6	MCOM Foodtech Anticrisis	2020-05-03 18:00:00+00	2020-05-31 17:00:00+00	DAY
7	Serverless Architecture Conference 2020	2020-06-30 18:00:00+00	2020-07-05 17:00:00+00	HOUR
8	HR API Online-marathon 2020	2020-09-02 18:00:00+00	2020-09-05 17:00:00+00	HOUR
1	World cyber game	2020-04-09 18:00:00+00	2020-04-15 17:00:00+00	HOUR
\.


--
-- Data for Name: Users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Users" (id, name, email, password) FROM stdin;
1	Admin	admin@google.com	admin_passw
2	John Doe	joo@google.com	user_passw
3	Michael	ptr@gmail.com	hardPass
\.


--
-- Name: AttributeValues_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."AttributeValues_id_seq"', 5, true);


--
-- Name: Attributes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Attributes_id_seq"', 2, true);


--
-- Name: Notifications_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Notifications_id_seq"', 3, true);


--
-- Name: Orders_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Orders_id_seq"', 4, true);


--
-- Name: TimeTables_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."TimeTables_id_seq"', 21, true);


--
-- Name: Users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Users_id_seq"', 3, true);


--
-- Name: AttributeValues AttributeValues_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."AttributeValues"
    ADD CONSTRAINT "AttributeValues_pkey" PRIMARY KEY (id);


--
-- Name: Attributes Attributes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Attributes"
    ADD CONSTRAINT "Attributes_pkey" PRIMARY KEY (id);


--
-- Name: Notifications Notifications_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notifications"
    ADD CONSTRAINT "Notifications_pkey" PRIMARY KEY (id);


--
-- Name: Orders Orders_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_pkey" PRIMARY KEY (id);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: TimeTables TimeTables_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."TimeTables"
    ADD CONSTRAINT "TimeTables_pkey" PRIMARY KEY (id);


--
-- Name: Users Users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_email_key" UNIQUE (email);


--
-- Name: Users Users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);


--
-- Name: AttributeValues AttributeValues_attributeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."AttributeValues"
    ADD CONSTRAINT "AttributeValues_attributeId_fkey" FOREIGN KEY ("attributeId") REFERENCES public."Attributes"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: AttributeValues AttributeValues_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."AttributeValues"
    ADD CONSTRAINT "AttributeValues_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."Orders"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: AttributeValues AttributeValues_timeTableId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."AttributeValues"
    ADD CONSTRAINT "AttributeValues_timeTableId_fkey" FOREIGN KEY ("timeTableId") REFERENCES public."TimeTables"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Attributes Attributes_timeTableId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Attributes"
    ADD CONSTRAINT "Attributes_timeTableId_fkey" FOREIGN KEY ("timeTableId") REFERENCES public."TimeTables"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Notifications Notifications_orderId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notifications"
    ADD CONSTRAINT "Notifications_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES public."Orders"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Notifications Notifications_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Notifications"
    ADD CONSTRAINT "Notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Orders Orders_authorId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES public."Users"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: Orders Orders_timeTableId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Orders"
    ADD CONSTRAINT "Orders_timeTableId_fkey" FOREIGN KEY ("timeTableId") REFERENCES public."TimeTables"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

