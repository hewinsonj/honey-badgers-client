import { useNavigate } from 'react-router-dom'
import {  Button, Segment, Grid, Feed, Icon, Image, Progress } from 'semantic-ui-react'
import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'


const UserPage = () => {

    //const [allBadges, setAllBadges] = useState([])
    // const badgeImages = allBadges.map(badge => (
    //     <Image src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' size='small' circular 
    //(I think we should make each badge a modal that showes details when clicked like a    subdocument) 
    // />
    // ))

    // if (!allBadges) {
    //     return <LoadingScreen />
    // }

    let percent = 90 

    const increment = (percent) => {
         percent =+ 20
    }

    // state = { percent: 33 }

    // const increment = () =>
    // this.setState((prevState) => ({
    //   percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
    // }))
    
    const images = [
        'https://i.etsystatic.com/7578666/r/il/cff814/1735209273/il_1140xN.1735209273_ecbc.jpg',
        'https://i.etsystatic.com/10536084/r/il/83f1d3/4011356412/il_1140xN.4011356412_e62z.jpg',
        'https://i.etsystatic.com/10536084/r/il/3aac0c/4011244316/il_1140xN.4011244316_9ffm.jpg',
        'https://i.etsystatic.com/10536084/r/il/b67424/4058937747/il_1140xN.4058937747_esbp.jpg',
        'https://i.etsystatic.com/10536084/r/il/3f03d0/4011213950/il_1140xN.4011213950_h2pg.jpg',
        'https://i.etsystatic.com/10536084/r/il/fa6529/4011242016/il_1140xN.4011242016_fdd1.jpg',
        'https://i.etsystatic.com/13215769/r/il/c4241b/2849297993/il_1140xN.2849297993_2n4t.jpg',
        'https://i.etsystatic.com/7578666/r/il/cff814/1735209273/il_1140xN.1735209273_ecbc.jpg',
        'https://i.etsystatic.com/10536084/r/il/83f1d3/4011356412/il_1140xN.4011356412_e62z.jpg',
        'https://i.etsystatic.com/10536084/r/il/3aac0c/4011244316/il_1140xN.4011244316_9ffm.jpg',
        'https://i.etsystatic.com/10536084/r/il/b67424/4058937747/il_1140xN.4058937747_esbp.jpg',
        'https://i.etsystatic.com/10536084/r/il/3f03d0/4011213950/il_1140xN.4011213950_h2pg.jpg',
        'https://i.etsystatic.com/10536084/r/il/fa6529/4011242016/il_1140xN.4011242016_fdd1.jpg',
        'https://i.etsystatic.com/13215769/r/il/c4241b/2849297993/il_1140xN.2849297993_2n4t.jpg',
    ]
	return (
		<>
        <div >
		<div >
        
		    <Segment 
                raised
                inverted 
                color='yellow' 
                // verticalAlign='middle' 
            >
                <Grid columns={3} verticalAlign='center'>
                    <Grid.Column width={3}>
                        <Segment raised>
                            <Grid columns={2} padded>
                                {images.map((src) => (
                                    <Grid.Column >
                                        <Image 
                                            src={(src)} 
                                            size='big' 
                                            circular 
                                            
                                            alt='A picture of a badge'
                                        /> 
                                        (Badge Name)
                                    </Grid.Column>
                                ))}
                                {/* { badgeImages } */}
                            </Grid>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        {/* <Sticky offset={65}> */}
                            <Segment.Group id='actList' raised >
                                <h2>List of User Activities</h2>
                                {images.map((src) => (
                                    <Segment id='actListItems'>
                                        <Grid>
                                            <Grid.Column width={4}>
                                            <Image 
                                                src='https://i.etsystatic.com/7578666/r/il/cff814/1735209273/il_1140xN.1735209273_ecbc.jpg'
                                                size='small'
                                                circular />
                                            </Grid.Column>
                                            <Grid.Column width={9}>
                                                <h1>Task info...</h1>
                                                <p>details, details, details, details, details, details, details, </p>
                                            </Grid.Column>
                                            <Grid.Column width={3}>
                                                <Progress percent={percent} indicating />
                                                <Button onClick={increment}>Increment</Button>

                                                {/* <Progress percent={this.state.percent} indicating />
                                                <Button onClick={this.increment}>Increment</Button> */}
                                                
                                            </Grid.Column>
                                        </Grid>
                                    </Segment>
                                ))}
                                
                            </Segment.Group>
                        {/* </Sticky> */}
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Segment raised>
                            <h2>Community Tasks</h2>
                            {/* <Feed events={events} /> */}
                            <Feed>
                                <Feed.Event>
                                    <Feed.Label>
                                        <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                                    </Feed.Label>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            <Feed.User>Elliot Fu</Feed.User> added you as a friend
                                            <Feed.Date>1 Hour Ago</Feed.Date>
                                        </Feed.Summary>
                                        <Feed.Meta>
                                            <Feed.Like>
                                                <Icon name='like' />4 Likes
                                            </Feed.Like>
                                        </Feed.Meta>
                                    </Feed.Content>
                                </Feed.Event>

                                <Feed.Event>
                                    <Feed.Label>
                                        <img src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                                    </Feed.Label>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            <a>Helen Troy</a> completed <a>2 activities</a>
                                            <Feed.Date>4 days ago</Feed.Date>
                                        </Feed.Summary>
                                        <Feed.Extra images>
                                            <a>
                                                <img src='https://i.etsystatic.com/13215769/r/il/c4241b/2849297993/il_1140xN.2849297993_2n4t.jpg' />
                                            </a>
                                            <a>
                                                <img src='https://i.etsystatic.com/13215769/r/il/58b696/2968473182/il_1140xN.2968473182_fhtj.jpg' />
                                            </a>
                                        </Feed.Extra>
                                        <Feed.Meta>
                                            <Feed.Like>
                                                <Icon name='like' />1 Like
                                            </Feed.Like>
                                        </Feed.Meta>
                                    </Feed.Content>
                                </Feed.Event>
                                <Feed.Event>
                                    <Feed.Label>
                                        <img src='https://react.semantic-ui.com/images/avatar/small/justen.jpg' />
                                    </Feed.Label>
                                    <Feed.Content>
                                        <Feed.Summary
                                        date='2 Days Ago'
                                        user='Jenny Hess'
                                        content='add you as a friend'
                                        />
                                        <Feed.Meta>
                                            <Feed.Like>
                                                <Icon name='like' />8 Likes
                                            </Feed.Like>
                                        </Feed.Meta>
                                    </Feed.Content>
                                </Feed.Event>

                                <Feed.Event>
                                    <Feed.Label>
                                        <img src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                                    </Feed.Label>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            <a>Joe Henderson</a> completed the activity "Solve a Rubix Cube"
                                            <Feed.Date>3 days ago</Feed.Date>
                                        </Feed.Summary>
                                        <Feed.Extra text>
                                            Finally solved that dang Rubix Cude! That was a hard one!
                                        <Image 
                                            src='https://i.etsystatic.com/34145471/r/il/101581/4076317209/il_794xN.4076317209_jld1.jpg' 
                                            size='small' 
                                            circular 
                                            alt='A picture of a badge'
                                        /> 
                                        </Feed.Extra>
                                        <Feed.Meta>
                                            <Feed.Like>
                                                <Icon name='like' />5 Likes
                                            </Feed.Like>
                                        </Feed.Meta>
                                    </Feed.Content>
                                </Feed.Event>

                                <Feed.Event>
                                    <Feed.Label>
                                        <img src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                                    </Feed.Label>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            <a>Justen Kitsune</a> added <a>2 new photos</a> of "Explore a park you have never been to before"
                                            <Feed.Date>4 days ago</Feed.Date>
                                        </Feed.Summary>
                                        <Feed.Extra images>
                                            <a>
                                                <img src='https://www.exploregeorgia.org/sites/default/files/listing_images/profile/2584/MPPIMG_0347.jpg' />
                                            </a>
                                            <a>
                                                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Halleyparknovember.jpg/1200px-Halleyparknovember.jpg' />
                                            </a>
                                        </Feed.Extra>
                                        <Feed.Meta>
                                            <Feed.Like>
                                                <Icon name='like' />
                                                41 Likes
                                            </Feed.Like>
                                        </Feed.Meta>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                        </Segment>
                    </Grid.Column>
                </Grid>
		    </Segment>
         
		</div>
        </div>
		</>
	)
}

export default UserPage