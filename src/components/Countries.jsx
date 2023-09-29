import React, { useState } from 'react';
import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import { initializeCountries } from '../features/countries/countriesSlice';
import CountryCard from './CountryCard';

const Countries = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries);
  const loading = useSelector((state) => state.countries.isLoading);

  const [search, setSearch] = useState('')


  // const filteredCountries = countriesList.filter((country) =>
  //   country.name.common.toLowerCase().includes(search.toLowerCase())
  // );
  console.log("countriesList: ", countriesList);

  useEffect(() => {
    dispatch(initializeCountries())
  }, [dispatch])


  return (
    <Container fluid>
      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          <Form>
            <Form.Control
              style={{ width: '18rem' }}
              type="search"
              className="me-2 "
              placeholder="Search for countries"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </Col>
      </Row>
      <Row xs={2} md={3} lg={4} className=" g-3">
        {/* {search ? (
          filteredCountries.map((country) => {
            return <CountryCard country={country} key={country.name.common} />
          })
        ) : (
          countriesList.map((country) => {
            return <CountryCard country={country} key={country.name.common} />
          })
        )} */}
        {countriesList.filter((c) => {

          return c.name.official.toLowerCase().includes(search.toLowerCase());
        })
          .map((country) => (
            <CountryCard key={country.name.common} country={country} />
          ))}
      </Row>
    </Container>
  );
};

export default Countries;