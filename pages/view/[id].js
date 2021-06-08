import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Loader } from 'semantic-ui-react';
import Item from '../../src/components/Item';

const Post = () => {
    const router = useRouter();
    const { id } = router.query;

    const [item, setItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

    function getData() {
        axios.get(API_URL)
            .then(res => {
                console.log(res.data);
                setItem(res.data);
                setIsLoading(false);
            })
    };

    useEffect(() => {
        if (id && id > 0) {
            getData();
        }
    }, [id]);

    return (
        <>
            {isLoading ? (
                <div style={{ padding: "300px 0" }}>
                    <Loader inline="centered" active>
                        Loading
                    </Loader>
                </div>
            ) : (
                <Item item={item} />
            )}
        </>
    );
};

export default Post;