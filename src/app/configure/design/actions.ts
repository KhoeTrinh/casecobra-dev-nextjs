'use server';

import {CaseColor, CaseFinish, CaseMaterial, PhoneModel} from '@prisma/client'

type Props = {
    color: CaseColor
    finish: CaseFinish;
    material: CaseMaterial;
    model: PhoneModel;
    configId: string;
}

export async function saveConfig({
    color,
    finish,
    material,
    model,
    configId,
}: Props) {}
