import React, { useEffect, useState } from 'react';
import UserList from './components/UserList';
import SelectedUserDetails from './components/SelectedUserDetails';

const App = () => {
    const [userList, setUserList] =  useState([]);
    const [selectedUserDetail, setSelectedUserDetail] = useState(null);


    // function to make api call and fetch user list
    const fetchUserList = async() => {
      const response = await fetch('https://panorbit.in/api/users.json');
      const data = await response.json();
      setUserList(data.users);
    }

    useEffect(() => {
      fetchUserList();
    }, []);

  return (
    <div className="app">
      {
        selectedUserDetail ? 
        <SelectedUserDetails setSelectedUserDetail={setSelectedUserDetail} userList={userList} selectedUserDetail={selectedUserDetail} />
        :
        <UserList setSelectedUserDetail={setSelectedUserDetail} userList={userList} /> 

      }
    </div>
  );
}

export default App;