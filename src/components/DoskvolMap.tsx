import classNames from 'classnames';
import React, { SVGProps, useCallback, useState } from 'react';

import styles from './DoskvolMap.module.scss';

export enum District {
  Barrowcleft,
  Brightstone,
  Charhollow,
  Charterhall,
  Coalridge,
  CrowsFoot,
  Docks,
  Dunslough,
  GaddocRailStation,
  IronhookPrison,
  Nightmarket,
  Silkshore,
  SixTowers,
  Whitecrown
}

export interface DoskvolMapProps
  extends Omit<SVGProps<SVGSVGElement>, 'onSelect'> {
  selectedDistrict?: District;
  onSelect?: (district: District) => void;
}

export function DoskvolMap(props: DoskvolMapProps) {
  const { onSelect, selectedDistrict, ...rest } = props;
  const [selected, setSelected] = useState<District | null>(null);

  const currentSelection =
    selectedDistrict === undefined ? selected : selectedDistrict;
  const updateSelection = useCallback(
    (district: District) => {
      if (onSelect) {
        onSelect(district);
      } else {
        setSelected(district);
      }
    },
    [onSelect, setSelected]
  );

  return (
    <svg
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 697.06 869.11"
    >
      <g
        className={classNames(styles.districtGroup, styles.whitecrown, {
          [styles.selected]: District.Whitecrown === currentSelection
        })}
        onClick={() => updateSelection(District.Whitecrown)}
      >
        <polygon
          className={styles.districtPolygon}
          points="43.5 319.56 54.5 239.56 90.5 198.56 103.5 128.56 144.5 115.56 193.5 39.56 252.5 12.56 285.5 21.56 357.5 3 391.5 30.56 391.5 57.56 414.5 54.56 440.5 36.56 454.5 41.56 461.5 54.56 389.5 128.56 351.5 131.56 310.5 164.56 222.5 178.56 157.5 248.56 139.5 243.56 121.5 234.56 119.5 245.56 128.5 254.56 130.5 286.56 94.5 310.56 43.5 319.56"
        />
        <text className={styles.districtName} x="180" y="120">
          Whitecrown
        </text>
      </g>

      <g
        className={classNames(styles.districtGroup, styles.sixTowers, {
          [styles.selected]: District.SixTowers === currentSelection
        })}
        onClick={() => updateSelection(District.SixTowers)}
      >
        <polygon
          className={styles.districtPolygon}
          points="561.5 391.56 553.5 445.56 557.5 535.56 610.5 535.56 649.5 501.56 667.5 495.56 670.5 477.56 681.5 439.56 658.5 382.56 658.5 331.56 631.5 281.56 631.5 248.56 584.5 209.56 564.5 219.56 584.5 290.56 539.5 342.56 551.63 356.68 561.5 391.56"
        />
        <text className={styles.districtName} x="570" y="420">
          Six
        </text>
        <text className={styles.districtName} x="585" y="445">
          Towers
        </text>
      </g>

      <g
        className={classNames(styles.districtGroup, styles.silkshore, {
          [styles.selected]: District.Silkshore === currentSelection
        })}
        onClick={() => updateSelection(District.Silkshore)}
      >
        <polygon
          className={styles.districtPolygon}
          points="174.5 367.56 180.5 382.56 174.5 481.56 177.5 521.56 224.5 598.56 239.5 630.56 220.5 633.56 185.5 621.56 141.5 622.56 104.5 612.56 49.5 579.56 31.5 575.56 23.5 570.56 27.5 503.56 46.5 462.56 51.5 430.56 114.5 388.56 174.5 367.56"
        />
        <text className={styles.districtName} x="50" y="520">
          Silkshore
        </text>
      </g>

      <g
        className={classNames(styles.districtGroup, styles.nightmarket, {
          [styles.selected]: District.Nightmarket === currentSelection
        })}
        onClick={() => updateSelection(District.Nightmarket)}
      >
        <polygon
          className={styles.districtPolygon}
          points="554.5 693.56 550.5 678.56 553.5 662.56 541.5 654.56 539.5 643.56 522.5 621.56 511.5 588.56 521.5 575.56 536.5 575.56 565.5 552.56 620.5 551.56 663.5 515.56 670.5 518.56 696.5 560.56 691.5 573.56 693.5 585.56 678.5 633.56 671.5 643.56 666.5 661.56 554.5 693.56"
        />
        <text className={styles.districtName} x="530" y="610">
          Nightmarket
        </text>
      </g>

      <g
        className={classNames(styles.districtGroup, styles.ironhookPrison, {
          [styles.selected]: District.IronhookPrison === currentSelection
        })}
        onClick={() => updateSelection(District.IronhookPrison)}
      >
        <polygon
          className={styles.districtPolygon}
          points="289.5 780.56 381.5 780.56 381.5 709.56 342.5 691.56 289.5 675.56 289.5 780.56"
        />
        <text className={styles.districtName} x="297" y="720">
          Iron-
        </text>
        <text className={styles.districtName} x="312" y="740">
          hook
        </text>
        <text className={styles.districtName} x="297" y="765">
          Prison
        </text>
      </g>

      <g
        className={classNames(styles.districtGroup, styles.gaddocRailStation, {
          [styles.selected]: District.GaddocRailStation === currentSelection
        })}
        onClick={() => updateSelection(District.GaddocRailStation)}
      >
        <polygon
          className={styles.districtPolygon}
          points="553.5 745.56 556.5 762.56 567.5 779.56 570.5 803.56 570.5 829.56 573.5 843.56 613.5 868.56 628.5 863.56 636.5 854.56 646.5 836.56 646.5 820.56 636.5 811.56 630.5 776.56 634.5 744.56 640.5 714.56 646.5 699.56 660.5 680.56 665.5 666.56 556.5 697.56 563.5 705.56 563.5 716.56 553.5 745.56"
        />
        <text className={styles.districtName} x="565" y="765">
          Gaddoc
        </text>
        <text className={styles.districtName} x="580" y="790">
          Rail
        </text>
        <text className={styles.districtName} x="595" y="815">
          Station
        </text>
      </g>

      <g
        className={classNames(styles.districtGroup, styles.dunslough, {
          [styles.selected]: District.Dunslough === currentSelection
        })}
        onClick={() => updateSelection(District.Dunslough)}
      >
        <polygon
          className={styles.districtPolygon}
          points="289.5 859.56 515.5 859.56 485.5 836.56 459.5 799.56 433.5 762.56 397.5 719.56 383.5 710.56 383.5 782.56 289.5 782.56 289.5 859.56"
        />
        <text className={styles.districtName} x="315" y="825">
          Dunslough
        </text>
      </g>

      <g
        className={classNames(styles.districtGroup, styles.docks, {
          [styles.selected]: District.Docks === currentSelection
        })}
        onClick={() => updateSelection(District.Docks)}
      >
        <polygon
          className={styles.districtPolygon}
          points="327.5 255.56 361.5 349.56 361.5 382.56 308.5 372.56 260.5 356.56 230.5 365.56 216.5 363.56 211.5 349.56 247.5 282.56 327.5 255.56"
        />
        <text className={styles.districtName} x="250" y="312">
          The
        </text>
        <text className={styles.districtName} x="265" y="337">
          Docks
        </text>
      </g>

      <g
        className={classNames(styles.districtGroup, styles.crowsFoot, {
          [styles.selected]: District.CrowsFoot === currentSelection
        })}
        onClick={() => updateSelection(District.CrowsFoot)}
      >
        <polygon
          className={styles.districtPolygon}
          points="361.5 493.56 361.5 394.56 302.5 382.56 260.5 367.56 233.5 375.56 222.5 382.56 217.5 497.56 222.5 505.56 252.5 505.56 272.5 510.56 304.5 500.56 333.5 499.56 361.5 493.56"
        />
        <text className={styles.districtName} x="250" y="433">
          Crow's
        </text>
        <text className={styles.districtName} x="265" y="458">
          Foot
        </text>
      </g>

      <g
        className={classNames(styles.districtGroup, styles.coalridge, {
          [styles.selected]: District.Coalridge === currentSelection
        })}
        onClick={() => updateSelection(District.Coalridge)}
      >
        <polygon
          className={styles.districtPolygon}
          points="394.5 616.56 414.5 597.56 428.5 594.56 452.5 579.56 481.5 579.56 499.5 593.56 516.5 635.56 516.5 651.56 531.5 667.56 539.5 713.56 529.5 743.56 533.5 772.56 553.5 803.56 549.5 824.56 541.5 824.56 509.5 799.56 465.5 732.56 419.5 683.56 394.5 616.56"
        />
        <text className={styles.districtName} x="425" y="675">
          Coalridge
        </text>
      </g>

      <g
        className={classNames(styles.districtGroup, styles.charterhall, {
          [styles.selected]: District.Charterhall === currentSelection
        })}
        onClick={() => updateSelection(District.Charterhall)}
      >
        <polygon
          className={styles.districtPolygon}
          points="387.5 585.56 387.5 367.56 517.5 367.56 533.5 349.56 544.5 362.56 553.5 399.56 546.5 441.56 550.5 541.56 530.5 558.56 425.5 560.56 402.5 585.56 387.5 585.56"
        />
        <text className={styles.districtName} x="398" y="470">
          Charterhall
        </text>
      </g>

      <g
        className={classNames(styles.districtGroup, styles.charhollow, {
          [styles.selected]: District.Charhollow === currentSelection
        })}
        onClick={() => updateSelection(District.Charhollow)}
      >
        <polygon
          className={styles.districtPolygon}
          points="361.5 500.56 335.5 507.56 308.5 507.56 271.5 518.56 252.5 513.56 231.5 513.56 224.5 518.56 273.5 601.56 281.5 615.56 309.5 637.56 357.5 651.56 376.5 638.56 369.5 608.56 361.5 555.56 361.5 500.56"
        />
        <text className={styles.districtName} x="240" y="579">
          Charhollow
        </text>
      </g>

      <g
        className={classNames(styles.districtGroup, styles.brightstone, {
          [styles.selected]: District.Brightstone === currentSelection
        })}
        onClick={() => updateSelection(District.Brightstone)}
      >
        <polygon
          className={styles.districtPolygon}
          points="342.5 250.56 369.5 241.56 440.5 241.56 481.5 221.56 521.5 160.56 560.5 169.56 575.5 185.56 584.5 200.56 557.5 214.56 575.5 281.56 512.5 349.56 380.5 349.56 342.5 250.56"
        />
        <text className={styles.districtName} x="390" y="300">
          Brightstone
        </text>
      </g>

      <g
        className={classNames(styles.districtGroup, styles.barrowcleft, {
          [styles.selected]: District.Barrowcleft === currentSelection
        })}
        onClick={() => updateSelection(District.Barrowcleft)}
      >
        <polygon
          className={styles.districtPolygon}
          points="114.5 764.56 114.5 638.56 96.5 633.56 41.5 598.56 21.5 593.56 11.5 593.56 3 617.56 9.5 633.56 3 651.56 3 666.56 15.5 693.56 16.5 701.56 27.5 719.56 28.5 736.56 23.5 756.56 15.5 770.56 19.5 799.56 84.5 799.56 84.5 764.56 114.5 764.56"
        />
        <text className={styles.districtName} x="3" y="700">
          Barrowcleft
        </text>
      </g>
    </svg>
  );
}
