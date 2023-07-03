import React from 'react';
import Blog from '../Blog/Blog';

class Home extends React.Component{
    state={
        user:{},
        blog_entries:[ 
            {
                title:"Lorem Ipsum",
                body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            },
            {title:"Title 2",
            body:"Body2"
        }
        ]
    }


    render(){
        return(
            <>
            <div>
            <p>This is the hero area</p>
            </div>

            <div>
            <p>This is the blog care display area</p>    
            <Blog title={this.state.blog_entries[1].title}
                    body={this.state.blog_entries[1].body}
            />
            </div>

            </>
           )
        
    }
}

export default Home; 