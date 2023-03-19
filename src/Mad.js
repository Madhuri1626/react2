import React from 'react';
import l1 from './p1.png';
import l2 from './p2.png';
import l3 from './g.png';
import l4 from './gg.png';
import './Mad.css'

function Mad() {
  return (
    <div className="mad">
      <table className="ui very basic collapsing celled table">
  <thead>
    <tr><th>Employee</th>
    <th>Correct Guesses</th>
  </tr></thead>
  <tbody>
    <tr>
      <td>
        <h4 className="ui image header">
          <img src={l1} alt="react" className="ui mini rounded image" />
          <div className="content">
            Lena
            <div className="sub header">Human Resources
          </div>
        </div>
      </h4></td>
      <td>
        22
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">
        <img src={l2} alt="react" className="ui mini rounded image" />
          <div className="content">
            Matthew
            <div className="sub header">Fabric Design
          </div>
        </div>
      </h4></td>
      <td>
        15
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">
        <img src={l3} alt="react" className="ui mini rounded image" />
          <div className="content">
            Lindsay
            <div className="sub header">Entertainment
          </div>
        </div>
      </h4></td>
      <td>
        12
      </td>
    </tr>
    <tr>
      <td>
        <h4 className="ui image header">
        <img src={l4} alt="react" className="ui mini rounded image" />
          <div className="content">
            Mark
            <div className="sub header">Executive
          </div>
        </div>
      </h4></td>
      <td>
        11
      </td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Mad
