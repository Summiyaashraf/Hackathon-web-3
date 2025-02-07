import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: "cont3l60", 
  dataset:"production", 
  useCdn: true, // Faster responses (only for published data)
  apiVersion: '2023-01-01', 
});

export default sanityClient;
