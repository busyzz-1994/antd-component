/**
 * Created by Vincent on 2018/8/6.
 */
import { Text } from 'box-react';
import Container from 'components/Container';
import Iconfont from 'components/Iconfont';
import Image from 'components/Image';
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
          color="white"
          backgroundColor="red"
          smBackgroundColor="green"
          mdBackgroundColor="blue"
          lgBackgroundColor="purple"
        >
          <Image
            contain
            src={require('./images/logo.png')}
            webp={require('./images/logo.webp')}
            width={320}
            height={120}
            backgroundColor="white"
          />
          <Iconfont color="black" />
          <Text size="xxl">{language.demo.heading}</Text>
          <Text size="xl">{language.demo.heading}</Text>
          <Text size="lg">{language.demo.heading}</Text>
          <Text size="md">{language.demo.heading}</Text>
          <Text size="sm">{language.demo.heading}</Text>
          <Text size="xs">{language.demo.heading}</Text>
          <Text size="xxs">{language.demo.heading}</Text>

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
