import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import AddEmployee from '../components/AddEmployee';
import EmployeeList from '../components/EmployeeList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditEmployee from '../components/EditEmployee';

const AppRouter = () => {
    const [employees, setEmployees] = useLocalStorage('employees', []);

    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="main-content">
                    <Switch>
                        <Route
                            render={(props) => (
                                <EmployeeList {...props} employees={employees} setEmployees={setEmployees} />
                            )}
                            path="/"
                            exact={true}
                        />  
                        <Route
                            render={(props) => (
                                <AddEmployee {...props} employees={employees} setEmployees={setEmployees} />
                            )}
                            path="/add"
                        />
                        <Route
                            render={(props) => (
                                <EditEmployee {...props} employees={employees} setEmployees={setEmployees} />
                            )}
                            path="/edit/:id"
                            />
                        <Route component={() => <Redirect to="/" />} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;