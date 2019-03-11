/**
 * Created by Vincent on 2018/8/6.
 */
import Container from 'components/Container';
import language from 'language';
import { inject, observer } from 'mobx-react';
import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import User from 'stores/User';
import styles from './index.module.scss';

interface DemoProps extends RouteComponentProps {
  user?: User; // injected
}

// @ts-ignore
@withRouter
@inject('user')
@observer
export default class Demo extends Component<DemoProps> {
  render() {
    let { user } = this.props;

    return (
      <Fragment>
        <Helmet>
          <title>{language.demo.title}</title>
          <meta name="description" content={language.demo.description} />
        </Helmet>
        <Container
          className={styles.container}
          width={200}
          height={200}
          color="white"
          backgroundColor="red"
          smBackgroundColor="green"
          mdBackgroundColor="blue"
          lgBackgroundColor="purple"
        >
          <h1>{language.demo.heading}</h1>
          {user.loggedIn ? (
            <span>
              {user.info.name}-{user.info.age}
            </span>
          ) : (
            <button onClick={() => user.login('admin', '123456')}>login</button>
          )}
        </Container>
      </Fragment>
    );
  }
}
