-- Insert data into the "agents" table
insert into agents (agentid, name, email, phonenumber, agentpictureurl) values ('2001', 'John Doe', 'john.doe@example.com', '+1-555-123-4567', 'https://i.pinimg.com/736x/62/ff/90/62ff90185beed04a255fa30385193f26--real-estate-headshot-ideas-men-real-estates.jpg');

insert into agents (agentid, name, email, phonenumber, agentpictureurl) values ('2002', 'Jane Smith', 'jane.smith@example.com', '+1-555-987-6543', 'https://assets.myzeki.com/74a5a06b-31df-4631-912e-ef68855435b2/amycooley_new.jpeg');

insert into agents (agentid, name, email, phonenumber, agentpictureurl) values ('2003', 'Michael Johnson', 'michael.johnson@example.com', '+1-555-789-0123','https://i.pinimg.com/originals/a1/1c/b5/a11cb521eb3d0951fc49163f861dac09.jpg');

insert into agents (agentid, name, email, phonenumber, agentpictureurl) values ('2004', 'Emily Davis', 'emily.davis@example.com', '+1-555-234-5678','https://th.bing.com/th/id/OIP.LjIFQxqIF3vUVGwhf44-BgHaML?pid=ImgDet&rs=1');

insert into agents (agentid, name, email, phonenumber, agentpictureurl) values ('2005', 'Sarah Anderson', 'sarah.anderson@example.com', '+1-555-345-6789', 'https://th.bing.com/th/id/OIP.2Z6Zj1GPE8AiMsGX5TwynQHaLH?pid=ImgDet&rs=1');

insert into properties (propertyid, address, price, bedroomcount, bathroomcount, imageurl, agentid)
values ('4004', '123 Oak Street, Suburbia', 200000, 3, 2, 'https://remax-listingphotos-ca5.imgix.net/rets-images-remaxmanuallistings-can/a4ea6ea4e809ea52e72f01279052cbbc27d23538-3-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640', '2005');

insert into properties (propertyid, address, price, bedroomcount, bathroomcount, imageurl, agentid)
values ('4005', '456 Maple Avenue, Cityville', 350000, 4, 3, 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/bc4dee41f92c5e9db7848fbe8a9cac0f9bcf2ceb-1-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&w=1920', '2002');

insert into properties (propertyid, address, price, bedroomcount, bathroomcount, imageurl, agentid)
values ('4006', '789 Elm Road, Countryside', 150000, 2, 1, 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/ca3715212213861b7c9b4deef57594e7d016b634-1-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&w=1920', '2003');

insert into properties (propertyid, address, price, bedroomcount, bathroomcount, imageurl, agentid)
values ('4007', '101 Pine Lane, Countryside', 120000, 3, 2, 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/f9f1c8c1f8decc3536531a6b4304f16398234e81-1-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=500&blur=0', '2004');

insert into properties (propertyid, address, price, bedroomcount, bathroomcount, imageurl, agentid)
values ('4008', '789 Downtown Avenue, City Center', 1800000, 5, 4, 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/97e2fa6c85bb18be1c0bd462ade6e04d272acbd0-1-large.jpeg?fit=max&auto=format,compress&fm=pjpg&cs=srgb&q=35&h=640', '2001');

insert into properties (propertyid, address, price, bedroomcount, bathroomcount, imageurl, agentid)
values ('4009', '101 Forest Lane, Suburbia', 280000, 4, 3, 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/4c4d7a82b604656bb260eb0dff7d2ba95b30179f-1-large.jpeg?fit=max&auto.format,compress&fm=pjpg&cs=srgb&q=35&w=1920', '2002');

insert into properties (propertyid, address, price, bedroomcount, bathroomcount, imageurl, agentid)
values ('4010', '123 Ocean Drive, Coastal Paradise', 750000, 5, 4, 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/2d3ca107f72ba611ca191b836e9ba89a324c37c9-1-large.jpeg?fit=max&auto.format,compress&fm=pjpg&cs=srgb&q=35&w=1920', '2003');

insert into properties (propertyid, address, price, bedroomcount, bathroomcount, imageurl, agentid)
values ('4011', '123 Riverfront Road, Waterfront', 4200000, 3, 2, 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/628d48e6126ba5e79ee36758b3b76be93ee606ab-1-large.jpeg?fit=max&auto.format,compress&fm=pjpg&cs=srgb&q=35&w=1920', '2004');

insert into properties (propertyid, address, price, bedroomcount, bathroomcount, imageurl, agentid)
values ('4012', '456 Hillside Drive, Scenic Views', 320000, 3, 2, 'https://remax-listingphotos-ca5.imgix.net/rets-images-crea-can/e93315dc9b9cac37dbfcd46d5ee01aa15a419d80-1-large.jpeg?fit=max&auto.format,compress&fm=pjpg&cs=srgb&q=35&w=1920', '2001');

