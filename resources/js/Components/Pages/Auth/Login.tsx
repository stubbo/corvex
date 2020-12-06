import React, {ReactNode} from 'react';
import Layout from 'Layout/index';
import Page from 'Layout/Page';
import {faKey} from '@fortawesome/free-solid-svg-icons';
import BasePage from 'Layout/Page/BasePage';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import AuthService, {AuthMethods} from 'Services/AuthService';
import {faDiscord, faSteam} from '@fortawesome/free-brands-svg-icons';
import Alert, {AlertProps} from 'Components/Layout/Alert';

const icons = {
  steam: faSteam,
  discord: faDiscord,
};

interface LoginState {
  alert?: AlertProps
  disabled: boolean
}

export default class Login extends BasePage<unknown, LoginState> {
  state = {
    alert: null,
    disabled: false,
  };

  static get shouldRender(): boolean {
    return !AuthService.isAuthed;
  }

  static route = {
    name: 'Login',
    route: '/login',
    component: Login,
    icon: faKey,
    shouldRender: Login.shouldRender,
    topNav: false,
  };

  handleLogin = async (method: keyof AuthMethods): Promise<void> => {
    if (this.state.disabled) return;

    await this.stateUpdate({
      disabled: true,
    });

    const login = await AuthService.login(method);

    if (!login.success) {

      await this.stateUpdate({
        disabled: false,
        alert: {
          type: 'error',
          message: 'Something went wrong whilst logging in, try a different method or contact a site administrator.',
        }
      });
    } else {
      window.location.href = login.data.auth_url;
    }
  };

  render(): ReactNode {
    const methods = Object.keys(AuthService.authMethods());

    return (
      <Layout>
        <Page>
          <div
            className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div
              className="rounded p-6 sm:mx-auto sm:w-full sm:max-w-md">
              <img className="mx-auto h-12 w-auto" src="/img/logo.svg" alt=""/>
              <h2
                className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
              <div
                className="bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                {this.state.alert && <Alert {...this.state.alert} />}
                <div className="flex">
                  {methods.map((method: keyof AuthMethods, k) => (
                    <div key={k} className="w-3/12 mx-auto">
                      <button onClick={() => this.handleLogin(method)}
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <span className="sr-only">Sign in with {method}</span>
                        <FontAwesomeIcon size={'2x'} icon={icons[method]}/>
                      </button>
                    </div>))}
                </div>
              </div>
            </div>
          </div>
        </Page>
      </Layout>
    );
  }
}
