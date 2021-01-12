import React from 'react';
import { ProjectCard } from './project-card';
import SearchBox from "./search-box";

class ProjectList extends React.Component {
  constructor() {
    super();

    this.state = {
      repository_slug_list: ['ozlemts/React-Next10-Tailwind2-Starter', 'FurkanPortakal/opensourceadam', 'tailwindlabs/tailwindcss', 'vercel/vercel'],
      searchField:''
    };
  }

  componentDidMount() {}

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const {repository_slug_list, searchField} = this.state;
    const filtered_repository_slug_list = repository_slug_list.filter(e =>
      e.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="w-full">
        <SearchBox
          placeholder="Search Projects..."
          handleChange={ e => this.handleChange(e)}/>
        <div className='flex'>
          {filtered_repository_slug_list.map(e => (
            <ProjectCard key={e.id} repository_slug={e}></ProjectCard>
          ))}
        </div>
      </div>
    )
  }
}

export default ProjectList;

