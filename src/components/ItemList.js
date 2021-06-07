import { Grid, List } from "semantic-ui-react";

export default function ItemList({ list }) {
    return (
        <div>
            <Grid columns={3} divided>
                <Grid.Row>
                    {list.map(item => (
                        <Grid.Column>
                            <img src={item.image_link} alt={item.name} />
                        </Grid.Column>
                    ))}
                </Grid.Row>
            </Grid>
        </div>
    );
}