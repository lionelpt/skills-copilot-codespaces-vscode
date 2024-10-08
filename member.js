function skillsMember() {
    return this.skills;
  }
  
  const member = {
    skills: ['React', 'Redux'],
    skillsMember
  };
  
  console.log(member.skillsMember()); // ['React', 'Redux']