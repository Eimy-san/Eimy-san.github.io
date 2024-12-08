// script.js

const peptides = [
    
    {
        name: 'TumorTarget-1',
        description: 'TumorTarget-1 是一种针对肿瘤的优化抗体，展现出对特定靶点的高亲和力和特异性。其重链和轻链序列设计充分考虑了结合效率和稳定性，通过三维结构分析验证了其能精准结合 CTLA-4，并有效阻断配体相互作用。该抗体具有明显的肿瘤选择性，适合用于激活免疫系统攻击肿瘤细胞的相关研究。',
        pdbFile: 'TumorTarget-1.pdb'
    },
    {
        name: 'DefenCure-6',
        description: 'DefenCure-6 是一种人类 β-防御素 6（hBD-6），由 49 个氨基酸组成，具有 CCR2 趋化因子受体结合能力。其结构包含一个 α-螺旋和三个 β-折叠，形成稳定的 β-防御素骨架。DefenCure-6 能与乳腺癌细胞微囊相互作用，在肿瘤微环境中发挥免疫调节作用。',
        pdbFile: 'DefenCure-6.pdb'
    },
    {
        name: 'CRMP1-Human',
        description: 'CRMP1-Human 是人类塌陷反应介导蛋白-1（CRMP-1），由 572 个氨基酸组成，属于二氢嘧啶酶相关蛋白家族。其三维结构包含多个结构域，具有水解酶活性。CRMP-1 在神经发育中发挥重要作用，是肺癌的抑制因子。',
        pdbFile: 'CRMP1-Human.pdb'
    },
    {
        name: 'OncoPorin-1',
        description: 'OncoPorin-1 是一种由 12 个氨基酸组成的 α-螺旋抗菌肽，来源于黄胡蜂毒液，序列为 ILGTILGLLKGL-NH₂，具有显著的正电荷特性。在与 SDS 胶束的作用中，该肽能够嵌入膜模拟环境，破坏癌细胞膜的完整性，通过诱导膜透化作用对癌细胞造成直接杀伤，其特性为其结构功能提供了独特的基础。',
        pdbFile: 'OncoPorin-1.pdb'
    },
    {
        name: 'CAIX-Inhibitor-1',
        description: 'CAIX-Inhibitor-1 是一种人类碳酸酐酶 IX（CA IX）的选择性抑制剂。其晶体结构显示，抑制剂 SLC-149 与 CA IX 的活性位点结合，阻断其催化活性。在乳腺癌细胞系中，CAIX-Inhibitor-1 的应用显示出有效的抗癌效果。',
        pdbFile: 'CAIX-Inhibitor-1.pdb'
    },
    {
        name: 'ClpP-Activator-1',
        description: 'ClpP-Activator-1 是一种小分子化合物，能够激活线粒体内的 Caseinolytic Protease P（ClpP）。其晶体结构显示，该化合物与人类 ClpP 的活性位点结合，诱导其构象变化，增强蛋白水解活性。在癌细胞中，ClpP 的过度激活导致关键蛋白质的降解，进而引发细胞凋亡。',
        pdbFile: 'ClpP-Activator-1.pdb'
    },
    {
        name: 'ColoMab-1',
        description: 'ColoMab-1 是人源化 A33 单克隆抗体的 C226S 变体，专为结直肠癌免疫治疗设计。其晶体结构解析显示，ColoMab-1 的抗原结合片段（Fab）由轻链和重链组成，形成特异性抗原结合位点。该抗体在结直肠癌模型中显示出良好的靶向性和抗肿瘤活性。',
        pdbFile: 'ColoMab-1.pdb'
    },
    {
        name: 'Mytilec-1',
        description: 'Mytilec-1 是一种来源于贻贝（Mytilus galloprovincialis）的抗癌凝集素，属于 β-三叶草家族。其晶体结构显示，Mytilec-1 以单体形式存在，具有三个伪等位结合位点，可与半乳糖和 N-乙酰半乳糖胺等糖类结合。该凝集素在某些癌细胞类型中表现出细胞毒性，可通过特异性识别癌细胞表面的糖链结构发挥作用。',
        pdbFile: 'Mytilec-1.pdb'
    },
    {
        name: 'Asparaginase-X',
        description: 'Asparaginase-X是一种具有特异性抗癌活性的多肽，能够高效催化天冬酰胺的水解反应，导致肿瘤细胞中天冬酰胺的耗竭，从而阻止其增殖和生长。在急性淋巴细胞白血病模型中，Asparaginase-X展现了良好的抗肿瘤效果，同时对健康细胞的影响较小，具有良好的选择性和安全性。',
        pdbFile: 'Asparaginase-X.pdb'
    },
    {
        name: 'OncoP53-1',
        description: 'OncoP53-1 是一种由 32 个氨基酸组成的肽段，来源于 p53 蛋白的 MDM-2 结合域。其序列为 PPLSQETFSDLWKLLKKWKMRRNQFWVKVQR。在水溶液中，OncoP53-1 形成 S 形结构，包含三个 α-螺旋区域，通过环状结构连接。在膜模拟环境中，该肽段的 α-螺旋含量增加，有助于其选择性破坏癌细胞膜。',
        pdbFile: 'OncoP53-1.pdb'
    }
    
    // 若有更多肽，可在此添加
];

/**
 * 创建主页上的小视图
 * @param {string} containerId - 容器的ID
 * @param {string} pdbFile - PDB文件名
 */
function createThumbnail(containerId, pdbFile) {
    const viewer = $3Dmol.createViewer(containerId, {
        defaultcolors: $3Dmol.rasmolElementColors,
        backgroundColor: "white",
        height: 100,
        width: 100,
        enableFog: false,
        disableMouse: true
    });

    fetch(`pdb/${pdbFile}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应错误');
            }
            return response.text();
        })
        .then(data => {
            viewer.addModel(data, "pdb");
            viewer.setStyle({}, { cartoon: { color: 'spectrum' } });
            viewer.zoomTo();
            viewer.render();
        })
        // .catch(error => {
        //     console.error('加载PDB文件时出错:', error);
        //     const errorMsg = document.createElement('p');
        //     errorMsg.innerText = '无法加载3D结构。';
        //     document.getElementById(containerId).appendChild(errorMsg);
        // });
        // .catch(error => {
        //     console.error('加载PDB文件时出错:', error);
        //     const container = document.getElementById(containerId);
        //     container.innerHTML = ''; // 清空原有内容
        //     const fallbackImg = document.createElement('img');
        //     fallbackImg.src = 'images/fallback-thumbnail.png'; // 替换为实际的占位图路径
        //     fallbackImg.alt = '预览加载失败';
        //     fallbackImg.style.width = '100px'; 
        //     fallbackImg.style.height = '100px'; 
        //     fallbackImg.style.objectFit = 'cover'; // 优化图片显示效果，可选
        //     container.appendChild(fallbackImg);
        // });

        // .catch(error => {
        //     console.error('加载PDB文件时出错:', error);
        //     const container = document.getElementById(containerId);
        //     container.innerHTML = ''; // 清空原有内容
        
        //     // 假设截图文件与pdb文件同名，仅将扩展名由pdb改为_screenshot.png
        //     const screenshotName = pdbFile.replace(/\.pdb$/i, '_screenshot.png');
        
        //     const fallbackImg = document.createElement('img');
        //     fallbackImg.src = `images/${screenshotName}`; // 请根据实际路径和文件名调整
        //     fallbackImg.alt = '3D预览加载失败，已显示截图';
        //     fallbackImg.style.width = '100px'; 
        //     fallbackImg.style.height = '100px';
        //     fallbackImg.style.objectFit = 'cover'; 
        
        //     container.appendChild(fallbackImg);
        // });
        .catch(error => {
            console.error('加载PDB文件时出错:', error);
            const container = document.getElementById(containerId);
            container.innerHTML = ''; // 清空原有内容
        
            // 将 .pdb 后缀替换为 _screenshot.png 作为截图的文件名
            const screenshotName = pdbFile.replace(/\.pdb$/i, '_screenshot.png');
        
            const fallbackImg = document.createElement('img');
            fallbackImg.src = `images/${screenshotName}`; // 根据实际路径与文件名调整
            fallbackImg.alt = '3D预览加载失败，已显示截图';
            fallbackImg.style.width = '100px'; 
            fallbackImg.style.height = '100px';
            fallbackImg.style.objectFit = 'cover'; 
        
            container.appendChild(fallbackImg);
        });
        
        
        
}
