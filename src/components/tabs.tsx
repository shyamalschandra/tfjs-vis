/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import { h, Component } from 'preact';
import { css } from 'glamor';
import { tachyons as tac } from 'glamor-tachyons';

interface TabsProps {
  tabNames: string[];
  activeTab: string | null;
  handleClick: (tabName: string) => void;
}

/**
 * Renders a container for tab links
 */
export class Tabs extends Component<TabsProps> {
  render() {
    const { tabNames, activeTab, handleClick } = this.props;

    const tabs = tabNames.length > 0 ?
      tabNames.map((name) => (
        <Tab key={name} id={name}
          handleClick={handleClick}
          isActive={name === activeTab}
        >
          {name}
        </Tab>
      ))
      : null;

    return (
      <div className={`bb b--light-gray pb2 mt3 visor-tabs`}>
        {tabs}
      </div>
    );
  }
}

interface TabProps {
  id: string;
  isActive: boolean;
  handleClick: (tabName: string) => void;
}

/**
 * A link representing a tab. Note that the component does not contain the
 * tab content
 */
class Tab extends Component<TabProps> {

  render() {
    const { children, isActive, handleClick, id } = this.props;

    const tabStyle = css({
      borderBottomColor: isActive ? '#357EDD' : '#AAAAAA',
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      cursor: 'pointer',
      ':hover': {
        color: '#357EDD'
      },
      ...tac('b f5 mr3 pa2')
    });

    return (
      <a className={`${tabStyle} tf-tab`}
        data-isactive={isActive}
        onClick={() => handleClick(id)}
      >
        {children}
      </a>
    );
  }
}
