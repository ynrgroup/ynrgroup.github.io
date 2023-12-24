import {ReactElement, useState} from "react";
import Column from "../../common/elements/column";
import Row from "../../common/elements/row";

// 작성 기준 시즌 10
// op.gg와 lolChess.gg의 계산식이 달라 lolChess.gg 사이트를 참고하였습니다.
// https://lolchess.gg/guide/damage

const damageFromStage: number[] = [0, 0, 0, 3, 5, 7, 9, 15]

function getDamageFromStage(round: number): number {
    return round >= damageFromStage.length ? 150 : damageFromStage[round];
}

const damageFromUnit: number[] = [0, 2, 4, 6, 7, 8, 9, 10, 11, 12, 13]

function getDamaneFromUnit(unit: number): number {
    return unit >= damageFromUnit.length ? damageFromUnit[damageFromUnit.length - 1] : damageFromUnit[unit];
}

function calculateDamage(stage: number, unit: number): number {
    return getDamageFromStage(stage) + getDamaneFromUnit(unit);
}

function renderingUnits() {
    const maxUnit = damageFromUnit.length - 1;
    return damageFromUnit.map((_, i: number) => {
        if (i === 0) {
            return <option value={0}>현재 필드의 유닛 수</option>
        } else if (i === maxUnit) {
            return <option value={maxUnit}>{maxUnit}마리 이상</option>
        } else {
            return <option value={i}>{i}마리</option>
        }
    });
}

function renderingStages() {
    return [
        ...damageFromStage.map((_, i: number) => {
            if (i === 0) {
                return <option value={0}>현재 스테이지</option>
            } else {
                return <option value={i}>{i}스테이지</option>
            }
        }),
        <option value={8}>{8}스테이지 이상</option>
    ];
}

export default function LoLChessCalculator(): ReactElement {
    const [selectedUnit, setSelectedUnit] = useState(0);
    const onUnitChanged = (e: any) => setSelectedUnit(e.target.value);
    const [selectedStage, setSelectedStage] = useState(0);
    const onStageChanged = (e: any) => setSelectedStage(e.target.value);
    return (
        <Column>
            <div>데미지 계산기</div>
            <select onChange={onUnitChanged} value={selectedUnit}>
                {renderingUnits()}
            </select>
            <select onChange={onStageChanged} value={selectedStage}>
                {renderingStages()}
            </select>
            <Row>
                <div>데미지 합계:</div>
                <div>{calculateDamage(selectedStage, selectedUnit)}</div>
            </Row>
        </Column>
    )
}