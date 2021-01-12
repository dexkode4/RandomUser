import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import PageLayout from './components/PageLayout';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';
import { getAllUsers, getMaleUsers, getFemaleUsers } from './API'
import { UserContext } from './context/userContext';

function App() {
  const state = useContext(UserContext);
  const [userType, setUserType] = useState("All Users");
  const [page, setPage] = useState(1);
  const [responseData, setResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("")


  useEffect(() => {
    setIsLoading(true);

    if (state?.userCategory === 'Female Users') {
      getFemaleUsers({ page }).then((res) => {
        setIsLoading(false)
        setResponseData(res?.results)

      }).catch(err => {
        setIsLoading(false)
      })

    } else if (state?.userCategory === 'Male Users') {
      getMaleUsers({ page }).then((res) => {
        setIsLoading(false)
        setResponseData(res?.results)

      }).catch(err => {
        setIsLoading(false)
      })
    } else {
      getAllUsers({ page }).then((res) => {
        setIsLoading(false)
        setResponseData(res?.results)

      }).catch(err => {
        setIsLoading(false)
      })
    }
  }, [state?.userCategory])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    let responseDataCopy = [...responseData];
    responseDataCopy = responseDataCopy.filter((user: any) => user.name.first.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setResponseData(responseDataCopy)
  }, [searchTerm])


  return (
    <Router>
      <Route path="/" exact>
        <PageLayout>
          <Header handleChange={handleChange} />
          <UserList data={responseData} isLoading={isLoading} />
        </PageLayout>
      </Route>

      <Route path="/:userId" exact>
        <PageLayout>
          <Header handleChange={handleChange} />
          <UserDetails />
        </PageLayout>
      </Route>
    </Router>
  );
}

export default App;
