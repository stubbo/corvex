import React, {Component, PropsWithChildren} from 'react';
import Header from './Header';

export interface LayoutState {
  colorSchemeDark: boolean;
}

export default class Layout extends Component<PropsWithChildren<{}>, LayoutState> {
  matchMedia = window.matchMedia('(prefers-color-scheme: dark)');
  state = {
    colorSchemeDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  };

  componentDidMount() {
    this.matchMedia.addEventListener('change', this.setColorScheme);
  }

  componentWillUnmount() {
    this.matchMedia.removeEventListener('change', this.setColorScheme)
  }

  setColorScheme = ({matches: isDark}: MediaQueryListEvent) => {
    this.setState({
      colorSchemeDark: isDark,
    });
  }

  public render() {
    const {colorSchemeDark} = this.state;

    return (
      <div className={`min-h-screen flex flex-col ${colorSchemeDark ? 'dark' : ''}`}>
        <Header/>

        <main className="bg-gray-50 dark:bg-gray-900 flex-1">
          <div className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
              {this.props.children}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
