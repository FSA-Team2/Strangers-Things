const COHORT_NAME = '2302-ACC-PT-WEB-PT-A';
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

//fetch posts
export const FetchPosts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            headers: {
                'Content-Type': 'application/json',
                
              },
            });
            const responseJson = await response.json();
            // console.log(responseJson);
            const allPosts = responseJson.data.posts;
            console.log(allPosts);
            return allPosts;
            
          } catch (err) {
            console.error(err);
          }
        }



export default FetchPosts;