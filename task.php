<?php
include_once('connection.php');
$conn = connection();
$id_login = 1;
$sql = 'SELECT `pending_task`.`task`,`pending_task`.`subject`,`pending_task`.`description`,`pending_task`.`priority` FROM `pending_task` INNER JOIN `login` ON `login`.`id_login` = :id AND `pending_task`.`id_login` = :id';
$stmt = $conn->prepare($sql);
$stmt->bindParam(':id', $id_login);
$stmt->execute();
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);
foreach ($result as $row) : ?>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <div class="task" id="task-id">

        <div class="task-name">
            <span class="task-title"><?= $row['task'] ?></span>
            <span class="subtitle task-materia"><?= $row['subject'] ?></span>
            <span class="subtitle task-descricao"><?= $row['description']?></span>
        </div>

        <div style="display: flex; align-items: center;">
            <span class="subtitle task-date">FEV 19 <span class="bold" style="margin-left: 3px;">08:40</span></span>
            <?php echo '<span class="priority ' . $row['priority'] . '"></span>'; ?>

        </div>
    </div>
<?php endforeach; ?>