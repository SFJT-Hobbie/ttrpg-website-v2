SET session_replication_role = 'replica';

INSERT INTO public.wiki_pages (id, room_id, title, content, parent_id, created_at, updated_at) VALUES ('0c12d0a6-9f25-4d34-a65f-3c37d904974e', 'c3497459-c4bf-4a9e-a01e-032f1a3f4df0', 'Panteónes Principales de Aristilia', '<h2><strong><u>Definición</u></strong></h2><p>Un panteón es el conjunto de todos los dioses de una religión o mitología politeísta,</p>', '5edafa78-1720-4f25-bb29-bccd98025602', '2025-08-31 14:58:39.658124', '2025-08-31 15:00:30.76');

SET session_replication_role = 'origin';