import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';

import Layout from '../components/Layout';
import { getAllCars } from '../redux/actions/carActions';
import Spinner from '../components/Spinner';

const Home = () => {
  const { list, loading, error } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <Layout>
      <Row justify='center' gutter={16} className='mt-4'>
        {loading ? (
          <Spinner />
        ) : (
          list.map((car) => {
            return (
              <Col lg={5} sm={24} xs={24}>
                <div className='car p-2 mt-3 box-shadow1'>
                  <img src={car.image} alt={car.name} className='car-image' />

                  <div className='car-content d-flex align-items-center justify-content-between'>
                    <div>
                      <p>{car.name}</p>
                      <p>{car.rentPerHour} $ rent per hour</p>
                    </div>
                    <div>
                      <button className='btn-orange'>Book now</button>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })
        )}
      </Row>
    </Layout>
  );
};

export default Home;
