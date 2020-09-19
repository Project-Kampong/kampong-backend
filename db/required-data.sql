/* Create user roles */
INSERT INTO Roles (role_name) VALUES ('user');
INSERT INTO Roles (role_name) VALUES ('admin');

/* Skills mock data population */
INSERT INTO "public"."skills" ("skill", "skill_group") VALUES
('Needs Analysis', 'Big Data Analysis'),
('Quantitative Research', 'Big Data Analysis'),
('Statistical Analysis', 'Big Data Analysis'),
('Compiling Statistics', 'Big Data Analysis'),
('Database Management', 'Big Data Analysis'),
('Modeling', 'Big Data Analysis'),
('Data Analytics', 'Big Data Analysis'),
('Phone Applications', 'Coding and Programming'),
('Design UIUX', 'Coding and Programming'),
('Website Building', 'Coding and Programming'),
('Benchmarking', 'Project Management'),
('Budget Planning', 'Project Management'),
('Operations', 'Project Management'),
('Quality Assurance', 'Project Management'),
('Scheduling', 'Project Management'),
('Fund Raiser', 'Project Management'),
('Administrative', 'Project Management'),
('Microsoft Office Skills', 'Project Management'),
('Negotiations', 'Project Management'),
('Public Speaking', 'Project Management'),
('Content Management System', 'Social Media Experience'),
('Digital Marketing', 'Social Media Experience'),
('Networking', 'Social Media Experience'),
('Search Engine Optimisation', 'Social Media Experience'),
('Social Media Platforms', 'Social Media Experience'),
('Web Analytics', 'Social Media Experience'),
('Sales', 'Social Media Experience'),
('Automated Marketing Software', 'Social Media Experience'),
('Graphic Design', 'Social Media Experience'),
('Research', 'Writing'),
('Emails', 'Writing'),
('Client Relations', 'Writing'),
('Technical Documentation', 'Writing'),
('Requirements Gathering', 'Writing');

/* Create default locations */
INSERT INTO Locations (location) VALUES ('01 Raffles Place, Cecil, Marina, Peoples Park');
INSERT INTO Locations (location) VALUES ('02 Anson, Tanjong Pagar');
INSERT INTO Locations (location) VALUES ('03 Queenstown, Tiong Bahru');
INSERT INTO Locations (location) VALUES ('04 Telok Blangah, Harbourfront');
INSERT INTO Locations (location) VALUES ('05 Pasir Panjang, Hong Leong Garden, Clementi New Town');
INSERT INTO Locations (location) VALUES ('06 High Street, Beach Road');
INSERT INTO Locations (location) VALUES ('07 Middle Road, Golden Mile');
INSERT INTO Locations (location) VALUES ('08 Little India');
INSERT INTO Locations (location) VALUES ('09 Orchard, Cairnhill, River Valley');
INSERT INTO Locations (location) VALUES ('10 Ardmore, Bukit Timah, Holland Road, Tanglin');
INSERT INTO Locations (location) VALUES ('11 Watten Estate, Novena, Thomson');
INSERT INTO Locations (location) VALUES ('12 Balestier, Toa Payoh, Serangoon');
INSERT INTO Locations (location) VALUES ('13 Macpherson, Braddell');
INSERT INTO Locations (location) VALUES ('14 Geylang, Eunos');
INSERT INTO Locations (location) VALUES ('15 Katong, Joo Chiat, Amber Road');
INSERT INTO Locations (location) VALUES ('16 Bedok, Upper East Coast, Eastwood, Kew Drive');
INSERT INTO Locations (location) VALUES ('17 Loyang, Changi');
INSERT INTO Locations (location) VALUES ('18 Tampines, Pasir Ris');
INSERT INTO Locations (location) VALUES ('19 Serangoon Garden, Hougang, Ponggol');
INSERT INTO Locations (location) VALUES ('20 Bishan, Ang Mo Kio');
INSERT INTO Locations (location) VALUES ('21 Upper Bukit Timah, Clementi Park, Ulu Pandan');
INSERT INTO Locations (location) VALUES ('22 Jurong');
INSERT INTO Locations (location) VALUES ('23 Hillview, Dairy Farm, Bukit Panjang, Choa Chu Kang');
INSERT INTO Locations (location) VALUES ('24 Lim Chu Kang, Tengah');
INSERT INTO Locations (location) VALUES ('25 Kranji, Woodgrove');
INSERT INTO Locations (location) VALUES ('26 Upper Thomson, Springleaf');
INSERT INTO Locations (location) VALUES ('27 Yishun, Sembawang');
INSERT INTO Locations (location) VALUES ('28 Seletar');

INSERT INTO Locations (location) VALUES
('Admiralty'),
('Kranji'),
('Woodlands'),
('Sembawang'),
('Yishun'),
('Yio Chu Kang'),
('Seletar'),
('Sengkang'),
('Holland'),
('Queenstown'),
('Bukit Merah'),
('Telok Blangah '),
('Pasir Panjang'),
('Sentosa'),
('Bukit Timah'),
('Newtown'),
('Orchard'),
('City'),
('Marina South'),
('Serangoon'),
('Punggol'),
('Hougang'),
('Tampines'),
('Pasir Ris'),
('Loyang'),
('Simei'),
('Kallang'),
('Katong'),
('East Coast'),
('Macpherson'),
('Bedok'),
('Lim Chu Kang'),
('Chao Chu Kang'),
('Bukit Panjang'),
('Jurong East'),
('Jurong West'),
('Bukit Batok'),
('Hillview'),
('West Coast'),
('Clementi'),
('Thomson'),
('Sin Ming'),
('Bishan'),
('Ang Mo Kio'),
('Toa Payoh');
