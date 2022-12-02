import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: "hq6plezz",
    dataset: "production",
    apiVersion: "v1",
    token: "sk4xNw3E1JFEmBhh9cmopaikzfTjnZUItDncYItYjjCWPnBRAmCkYyaaaLnRZLcl1S99IlCjTTl8rteGW3OQFZLBG2amjaK6Ya04UOKKts3lccFjRCvr1wAY9kRH1j4hblyMwkaRcBV5NHFkB4Swbr9OEkxTVuGRWGG22bcm5D4Zvjhbjc0e",
    useCdn: false,
});
